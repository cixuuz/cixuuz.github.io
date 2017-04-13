function MenuState(name) {

    this.name = name;
    var scene = new Scene(canvas.width, canvas.height),
        ctx = scene.getContext();

    var btns = [], angle = 0, frames = 0;

    var _yPos = 150;
    btns.push(new MenuButton("Easy", 80, _yPos, function () {
        state.get("game").init(EASY);
        state.change("game");
    }));
    btns.push(new MenuButton("Intermediate", 80, _yPos + 80, function () {
        state.get("game").init(MID);
        state.change("game");
    }));
    btns.push(new MenuButton("Difficult", 80, _yPos + 160, function () {
        state.get("game").init(HARD);
        state.change("game");
    }));
    btns.push(new MenuButton("About", 80, _yPos + 240, function () {
        state.change("about", true);
    }));

    this.update = function () {
        frames++;
        angle = 0.2 * Math.cos(frames * 0.02);
    }

    this.render = function (_ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(250, 80);
        ctx.rotate(angle);
        ctx.font = "48px Helvetica";
        ctx.fillStyle = "sandybrown";
        var txt = "Tic Tac Toe";
        ctx.fillText(txt, -ctx.measureText(txt).width / 2, 18);
        ctx.restore();

        for (var i = btns.length; i--;) {
            btns[i].draw(ctx);
        }

        if (_ctx) {
            scene.draw(_ctx);
        } else {
            return scene.getCanvas();
        }
    }
}

var EASY = 1;
var MID = 2;
var HARD = 3;

function GameState(name) {

    this.name = name;
    var scene = new Scene(canvas.width, canvas.height),
        ctx = scene.getContext();

    var data, player, ai, isPlayer, aiMoved, mode, winner, winnerMsg, hastick;

    canvas.addEventListener("mousedown", function (evt) {
        if (winnerMsg && state.active_name === "game") {
            state.change("menu", true);
            return;
        }
        if (!isPlayer || winner || state.active_name !== "game" || !hastick) return;

        // listen player's mouse location
        var px = mouse.x;
        var py = mouse.y;

        if (px > 500) return;

        if (px % 120 >= 20 && py % 120 >= 20) {
            var idx = Math.floor(px / 120);
            idx += Math.floor(py / 120) * 4;
            // if tile has been flipped, skip it
            if (data[idx].hasData()) {
                return;
            }
            // flip the chosen tile
            data[idx].flip(player);
            // player has played
            isPlayer = false;
        }
    }, false);

    this.init = function (_mode) {

        mode = _mode;
        data = [];

        for (var i = 0; i < 16; i++) {
            var x = (i % 4) * 120 + 20;
            var y = Math.floor(i / 4) * 120 + 20;
            data.push(new Tile(x, y));
        }
        // player use cross tile
        player = Tile.CROSS;

        isPlayer = true;
        aiMoved = false;
        winner = false;
        winnerMsg = false;
        hastick = false;
        stats = [0, 0, 0, 0, 0, 0, 0, 0];

        ai = new AIPlayer(data);
    }

    this.update = function () {
        // if someone wins, then stop update 
        if (winnerMsg) return;

        // update each tile
        var activeAnim = false;
        for (var i = data.length; i--;) {
            data[i].update();
            activeAnim = activeAnim || data[i].active();
        }

        // animation is finished
        if (!activeAnim) {
            // ai has not moved and not player turn
            if (!aiMoved && !isPlayer) {
                // start time
                var start = new Date().getTime();
                // get best move 
                var res = ai.move(mode);
                var m = res[0];
                stats = res.slice(1, res.length);
                // end time
                var end = new Date().getTime();
                console.log("time cost " + (end - start) / 1000 + "s");
                console.log("winner" + winner);
                if (m == -1) {
                    winner = ai.hasWinner();
                } else {
                    data[m].flip(Tile.NOUGHT);
                }
                isPlayer = true;
            }

            // judge whether if player wins
            if (winner && !aiMoved) {
                if (winner === true) {
                    winnerMsg = "The game was a draw!";
                } else if (winner === Tile.NOUGHT) {
                    winnerMsg = "You Lose!";
                } else {
                    winnerMsg = "You won!";
                }
            }

            aiMoved = true;
        } else {
            if (aiMoved) {
                winner = ai.hasWinner();
            }
            aiMoved = false;
        }
        hastick = true;
    }

    this.render = function (_ctx) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = data.length; i--;) {
            data[i].draw(ctx);
        }

        if (stats) {
            var s = stats, x = 0, y = 50, lineHeight = 20;
            ;

            ctx.save();
            ctx.translate(500, 0);

            ctx.font = "14px Helvetica";
            ctx.fillStyle = "skyblue";

            ctx.fillText('Alpha Beta Algorithm', x, y);
            ctx.fillText('Cutoff occur?:', x, y + lineHeight);
            ctx.fillText(s[0], x, y + 2 * lineHeight);
            ctx.fillText('Max depth:', x, y + 3 * lineHeight);
            ctx.fillText(s[1], x, y + 4 * lineHeight);
            ctx.fillText('Node generated:', x, y + 5 * lineHeight);
            ctx.fillText(s[2], x, y + 6 * lineHeight);
            ctx.fillText('# of times max pruning:', x, y + 7 * lineHeight);
            ctx.fillText(s[3], x, y + 8 * lineHeight);
            ctx.fillText('# of times min pruning:', x, y + 9 * lineHeight);
            ctx.fillText(s[4], x, y + 10 * lineHeight);
            ctx.fillText('# of times enter max :', x, y + 11 * lineHeight);
            ctx.fillText(s[5], x, y + 12 * lineHeight);
            ctx.fillText('# of times enter min :', x, y + 13 * lineHeight);
            ctx.fillText(s[6], x, y + 14 * lineHeight);
            ctx.fillText('current depth :', x, y + 15 * lineHeight);
            ctx.fillText(s[7], x, y + 16 * lineHeight);
            ctx.restore();
        }

        if (winnerMsg) {
            var s = 10, lw = 2, w = 300, h = 80;

            w -= lw;
            h -= lw;

            ctx.save();
            ctx.translate((canvas.width - w + lw) / 2, (canvas.height - h + lw) / 2);
            ctx.fillStyle = "white";
            ctx.strokeStyle = "sandybrown";
            ctx.lineWidth = lw;
            ctx.font = "20px Helvetica";

            ctx.beginPath();
            ctx.arc(s, s, s, Math.PI, 1.5 * Math.PI);
            ctx.arc(w - s, s, s, 1.5 * Math.PI, 0);
            ctx.arc(w - s, h - s, s, 0, 0.5 * Math.PI);
            ctx.arc(s, h - s, s, 0.5 * Math.PI, Math.PI);
            ctx.closePath();

            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "sandybrown";
            var txt = winnerMsg;
            ctx.fillText(txt, w / 2 - ctx.measureText(txt).width / 2, 45);

            ctx.restore();
        }

        if (_ctx) {
            scene.draw(_ctx);
        } else {
            return scene.getCanvas();
        }
    }
}

function AboutState(name) {

    this.name = name;
    var scene = new Scene(canvas.width, canvas.height),
        ctx = scene.getContext();

    var text = "Tic Tac Toe is a game for a player(X) to play against a computer(O), who take turns marking the spaces in a 4×4 grid. The player who succeeds in placing four respective marks in a horizontal, vertical, or diagonal row wins the game. The AI player is based on alpha-beta search. There are three levels. In paticluar, you cannot win in the hard mode. Not believe? Try!";
    var hastick = false;

    canvas.addEventListener("mousedown", function (evt) {
        if (hastick && state.active_name === "about") {
            state.change("menu");
        }
        hastick = false;
    }, false);

    (function () {

        ctx.font = "24px Helvetica";
        ctx.fillStyle = "sandybrown";

        ctx.translate(20, 20);

        var s = 10,
            w = 400,
            h = 450,
            pi = Math.PI;

        ctx.beginPath();
        ctx.arc(s, s, s, pi, 1.5 * pi);
        ctx.arc(w - s, s, s, 1.5 * pi, 0);
        ctx.arc(w - s, h - s, s, 0, 0.5 * pi);
        ctx.arc(s, h - s, s, 0.5 * pi, pi);
        ctx.fill();

        ctx.fillStyle = "white";

        var words = text.split(' '),
            line = '',
            x = 30,
            y = 60,
            maxWidth = 350,
            lineHeight = 30;

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    })();


    this.update = function () {
        hastick = true;
    }

    this.render = function (_ctx) {

        if (_ctx) {
            scene.draw(_ctx);
        } else {
            return scene.getCanvas();
        }
    }
}