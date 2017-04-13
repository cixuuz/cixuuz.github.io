function StateManager() {

    var state = {},
        next = null,
        active = null,
        anim = 0,
        right = false;

    this.active_name = null;

    this.add = function () {
        for (var i = arguments.length; i--;) {
            var arg = arguments[i];
            state[arg.name] = arg;
        }
    };

    this.set = function (name) {
        active = state[name];
        this.active_name = name;
    };

    this.get = function (name) {
        return state[name];
    };

    this.change = function (name, _right) {
        anim = 0;
        right = _right || false;
        next = name;
        this.active_name = name;
    };

    this.tick = function (ctx) {
        if (next) {
            if (anim <= 1) {
                anim += 0.02;

                active.update();
                state[next].update();

                var c1 = active.render(),
                    c2 = state[next].render(),

                    c1w = c1.width,
                    c1h = c1.height,
                    c2w = c2.width,
                    c2h = c2.height,

                    res = 2,

                    p,
                    t = anim;
                p = t < 0.5 ? 2 * t * t : -2 * (t * (t - 2)) - 1;

                if (right) {
                    p = 1 - p;
                    var t = c2;
                    c2 = c1;
                    c1 = t;
                }

                for (var i = 0; i < c1w; i += res) {
                    ctx.drawImage(c1, i, 0, res, c1h,
                        i - p * i,
                        (c1w - i) * p * 0.2,
                        res,
                        c1h - (c1w - i) * p * 0.4
                    );
                }
                p = 1 - p;
                for (var i = 0; i < c2w; i += res) {
                    ctx.drawImage(c2, i, 0, res, c2h,
                        i - (i - c2w) * p,
                        i * p * 0.2,
                        res,
                        c1h - i * p * 0.4
                    );
                }

            } else {
                active = state[next];
                next = false;
                active.update();
                active.render(ctx);
            }
        } else {
            active.update();
            active.render(ctx);
        }
    };
}

function Tile(x, y) {

    var x = x, y = y;

    var tile = Tile.BLANK;
    var anim = 0;

    if (tile == null) {
        (function () {
            var _c = document.createElement("canvas");
            _c.width = _c.height = 100;
            var _ctx = _c.getContext("2d");

            _ctx.fillStyle = "sandybrown";
            _ctx.lineWidth = 4;
            _ctx.strokeStyle = "white";
            _ctx.lineCap = "round";

            // Blank
            _ctx.fillRect(0, 0, 100, 100);
            Tile.BLANK = new Image();
            Tile.BLANK.src = _c.toDataURL();

            // Nought
            _ctx.fillRect(0, 0, 100, 100);

            _ctx.beginPath();
            _ctx.arc(50, 50, 30, 0, 2 * Math.PI);
            _ctx.stroke();

            Tile.NOUGHT = new Image();
            Tile.NOUGHT.src = _c.toDataURL();

            // Cross
            _ctx.fillRect(0, 0, 100, 100);

            _ctx.beginPath();
            _ctx.moveTo(20, 20);
            _ctx.lineTo(80, 80);
            _ctx.moveTo(80, 20);
            _ctx.lineTo(20, 80);
            _ctx.stroke();

            Tile.CROSS = new Image();
            Tile.CROSS.src = _c.toDataURL();
        })();
        tile = Tile.BLANK;
    }

    this.active = function () {
        return anim > 0;
    }

    this.equals = function (_tile) {
        return tile === _tile;
    }

    this.hasData = function () {
        return tile !== Tile.BLANK;
    }

    this.set = function (next) {
        tile = next;
    }

    this.flip = function (next) {
        tile = next;
        anim = 1;
    }

    this.update = function () {
        if (anim > 0) {
            anim -= 0.02;
        }
    }

    this.draw = function (ctx) {
        if (anim <= 0) {
            ctx.drawImage(tile, x, y);
            return;
        }

        var res = 2;
        var t = anim > 0.5 ? Tile.BLANK : tile;
        var p = -Math.abs(2 * anim - 1) + 1;

        p *= p;

        for (var i = 0; i < 100; i += res) {

            var j = 50 - (anim > 0.5 ? 100 - i : i);

            ctx.drawImage(t, i, 0, res, 100,
                x + i - p * i + 50 * p,
                y - j * p * 0.2,
                res,
                100 + j * p * 0.4
            );
        }
    }

}

function AIPlayer(data) {

    var data = data, seed = Tile.NOUGHT, oppSeed = Tile.CROSS, stats;

    // the core algorithm based on alpha beta pruning 
    this.move = function (mode) {
        stats = [0, 0, 1, 0, 0, 0, 0, 0];
        // return v and index
        // bestMove = min_value(-1000, 1000, mode, true);
        // First time min value function

        // if TERMINAL-TEST(state) then return UTILITY(state)
        // if (depth == 0) {
        //     stats[0] = 1;
        //     return [evaluate(), -1];
        // }
        var nextMoves = getValidMoves();
        if (hasWon(Tile.CROSS) || hasWon(Tile.NOUGHT || nextMoves.length == 0)) {
            return -1;
        }

        var alpha = -1000, beta = 1000, v = 1000, 
            _max, bestMove = nextMoves[0], depth = mode;

        // for the next a in ACTIONS(state) do
        for (var i = 0; i < nextMoves.length; i++) {
            var m = nextMoves[i];
            // v ← MIN(v, MAX-VALUE(RESULT(state, a), α, β))
            // generate a node
            stats[2]++;
            data[m].set(Tile.NOUGHT);
            _max = max_value(alpha, beta, depth - 1);
            data[m].set(Tile.BLANK);

            if (_max <= v) {
                v = _max;
                bestMove = m;
            }
            // if v ≤ α then return v
            if (v <= alpha) {
                stats[4]++;
                stats[1] = Math.max(stats[1], stats[7]);
                return bestMove;
            }
            // β ← MIN(β, v)
            beta = Math.min(beta, v);
        }

        stats[1] = Math.max(stats[1], stats[7]);

        console.log(bestMove);
        console.log(stats);
        return [bestMove].concat(stats);
    };

    function max_value(_alpha, _beta, _depth) {
        stats[7]++;
        stats[5]++;
        // if TERMINAL-TEST(state) then return UTILITY(state)
        if (hasWon(Tile.CROSS)) {
            return 1000;
        }
        
        if (hasWon(Tile.NOUGHT)) {
            return -1000;
        }
        
        // if (depth == 0) {
        //     stats[0] = 1;
        //     return [evaluate(), -1];
        // } 

        var nextMoves = getValidMoves();
        if (nextMoves.length == 0) {
            return 0;
        }

        var alpha = _alpha, beta = _beta, v = -1000, 
            depth = _depth, _min, bestMove = nextMoves[0];

        // for the next a in ACTIONS(state) do
        for (var i = 0; i < nextMoves.length; i++) {
            var m = nextMoves[i];
            // v ← MAX(v, MIN-VALUE(RESULT(state, a), α, β))
            // generate a node
            stats[2]++;
            data[m].set(Tile.CROSS);
            _min = min_value(alpha, beta, depth-1);
            data[m].set(Tile.BLANK);
            if (_min >= v) {
                v = _min;
                bestMove = m;
            }
            // if v ≥ β then return v
            if (v >= beta) {
                stats[3]++;
                stats[1] = Math.max(stats[1], stats[7]);
                return v;
            }
            // α ← MAX(α, v)
            alpha = Math.max(alpha, v);
        }
        stats[1] = Math.max(stats[1], stats[7]);
        return v;
    }

    function min_value(_alpha, _beta, _depth) {
        // Tile.NOUGHT
        stats[7]++;
        stats[6]++;
        // if TERMINAL-TEST(state) then return UTILITY(state)
        // if (depth == 0) {
        //     stats[0] = 1;
        //     return [evaluate(), -1];
        // }

        if (hasWon(Tile.CROSS)) {
            return 1000;
        }

        if (hasWon(Tile.NOUGHT)) {
            return -1000;
        }

        var nextMoves = getValidMoves();
        if (nextMoves.length == 0) {
            return 0;
        }

        var alpha = _alpha, beta = _beta, v = 1000, 
            depth = _depth, _max, bestMove = nextMoves[0];

        // for the next a in ACTIONS(state) do
        for (var i = 0; i < nextMoves.length; i++) {
            var m = nextMoves[i];
            // v ← MIN(v, MAX-VALUE(RESULT(state, a), α, β))
            // generate a node
            stats[2]++;
            data[m].set(Tile.NOUGHT);
            _max = max_value(alpha, beta, depth-1);
            data[m].set(Tile.BLANK);
            if (_max <= v) {
                v = _max;
                bestMove = m;
            }
            // if v ≤ α then return v
            if (v <= alpha) {
                stats[4]++;
                stats[1] = Math.max(stats[1], stats[7]);
                return v;
            }
            // β ← MIN(β, v)
            beta = Math.min(beta, v);
        }
        stats[1] = Math.max(stats[1], stats[7]);
        return v;
    }

    // return a list of tiles are blank
    function getValidMoves() {
        var nm = [];
        for (var i = 0; i < data.length; i++) {
            if (!data[i].hasData()) {
                nm.push(i);
            }
        }
        return nm.sort(function(){ return 0.5 - Math.random() })
    }


    function evaluate() {
        var s = 0;
        s += evaluateLine(0, 1, 2, 3);
        s += evaluateLine(4, 5, 6, 7);
        s += evaluateLine(8, 9, 10, 11);
        s += evaluateLine(12, 13, 14, 15);
        s += evaluateLine(0, 4, 8, 12);
        s += evaluateLine(1, 5, 9, 13);
        s += evaluateLine(2, 6, 10, 14);
        s += evaluateLine(3, 7, 11, 15);
        s += evaluateLine(0, 5, 10, 11);
        s += evaluateLine(3, 6, 9, 12);
        return s;
    }

    function evaluateLine(idx1, idx2, idx3, idx4) {
        var s = 0, nx = 0, no = 0;
        if (data[idx1].equals(Tile.CROSS)) {
            nx++;
        } else if (data[idx1].equals(Tile.NOUGHT)) {
            no++;
        }

        if (data[idx2].equals(Tile.CROSS)) {
            nx++;
        } else if (data[idx2].equals(Tile.NOUGHT)) {
            no++;
        }

        if (data[idx3].equals(Tile.CROSS)) {
            nx++;
        } else if (data[idx3].equals(Tile.NOUGHT)) {
            no++;
        }

        if (data[idx4].equals(Tile.CROSS)) {
            nx++;
        } else if (data[idx4].equals(Tile.NOUGHT)) {
            no++;
        }

        if (nx == 3) {
            s += 6 * nx;
        } else if (nx == 2) {
            s += 3 * nx;
        } else if (nx == 1) {
            s += nx;
        }

        if (no == 3) {
            s -= 6 * no;
        } else if (no == 2) {
            s -= 3 * no;
        } else if (no == 1) {
            s -= no;
        }

        return s;
    }

    var winnigPatterns = (function () {
        var wp = ["1111000000000000",
                "0000111100000000",
                "0000000011110000",
                "0000000000001111",
                "1000100010001000",
                "0100010001000100",
                "0010001000100010",
                "0001000100010001",
                "1000010000100001",
                "0001001001001000"
            ],
            r = new Array(wp.length);
        for (var i = wp.length; i--;) {
            r[i] = parseInt(wp[i], 2);
        }
        return r;
    })();

    var hasWon = this.hasWon = function (player) {
        var p = 0;
        for (var i = data.length; i--;) {
            if (data[i].equals(player)) {
                p |= (1 << i);
            }
        }
        for (var i = winnigPatterns.length; i--;) {
            var wp = winnigPatterns[i];
            if ((p & wp) === wp) return true;
        }
        return false;
    };

    this.hasWinner = function () {
        if (hasWon(seed)) {
            return seed;
        } else if (hasWon(oppSeed)) {
            return oppSeed;
        } else if (getValidMoves().length == 0) {
            return true;
        }
        return false;
    };
}


function MenuButton(text, x, y, cb) {
    var text = text, x = x, y = y, callback = cb;
    var hover, normal, rect = {};

    canvas.addEventListener("mousedown", function (evt) {
        if (state.active_name !== "menu") return;

        if (rect.hasPoint(mouse.x, mouse.y)) {
            if (callback) {
                callback();
            }
        }
    }, false);

    (function () {
        var _c = document.createElement("canvas"),
            _w = _c.width = 340,
            _h = _c.height = 50,
            _lw = 2,
            s = 10;

        rect.x = x;
        rect.y = y;
        rect.width = _c.width;
        rect.height = _c.height;

        _w -= _lw;
        _h -= _lw;

        var _ctx = _c.getContext("2d");

        _ctx.fillStyle = "white";
        _ctx.strokeStyle = "sandybrown";
        _ctx.lineWidth = _lw;
        _ctx.font = "20px Helvetica";

        _ctx.translate(_lw / 2, _lw / 2);
        _ctx.beginPath();
        _ctx.arc(s, s, s, Math.PI, 1.5 * Math.PI);
        _ctx.arc(_w - s, s, s, 1.5 * Math.PI, 0);
        _ctx.arc(_w - s, _h - s, s, 0, 0.5 * Math.PI);
        _ctx.arc(s, _h - s, s, 0.5 * Math.PI, Math.PI);
        _ctx.closePath();
        _ctx.fill();
        _ctx.stroke();

        _ctx.fillStyle = _ctx.strokeStyle;
        var _txt = text;
        _ctx.fillText(_txt, (_w - _ctx.measureText(_txt).width) / 2, 30);

        normal = new Image();
        normal.src = _c.toDataURL();

        _ctx.fill();
        _ctx.stroke();

        _ctx.fillStyle = "white";
        _ctx.fillText(_txt, (_w - _ctx.measureText(_txt).width) / 2, 30);

        hover = new Image();
        hover.src = _c.toDataURL();
    })();

    rect.hasPoint = function (x, y) {
        var xl = this.x < x && x < this.x + this.width,
            yl = this.y < y && y < this.y + this.height;

        return xl && yl;
    };

    this.draw = function (ctx) {
        var tile = rect.hasPoint(mouse.x, mouse.y) && state.active_name === "menu" ? hover : normal;
        ctx.drawImage(tile, x, y);
    };

}

function Scene(width, height) {

    var width = width, height = height;

    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");

    this.getContext = function () {
        return ctx;
    };

    this.getCanvas = function () {
        return canvas;
    };

    this.draw = function (_ctx) {
        _ctx.drawImage(canvas, 0, 0);
    };
}