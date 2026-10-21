---
title: "Airflow Configuration Notes"
description: "sudo apt-get update"
date: "2017-07-30"
---

# enter instance

# [setting up python environment](https://www.digitalocean.com/community/tutorials/how-to-install-python-3-and-set-up-a-local-programming-environment-on-ubuntu-16-04)

sudo apt-get update

sudo apt-get install python3-pip

sudo apt-get install build-essential libssl-dev libffi-dev python-dev

sudo apt-get install -y python3-venv

alias py3=‘source /home/ubuntu/py\_envs/py3/bin/activate’

# setting airflow

export AIRFLOW\_HOME=~/nfs/airflow

python3 -m venv py\_envs/py3
pip install “airflow[celery, crypto, mysql, password, s3, postgres, slack]”

# call this command many times, until it says it’s not installed

pip uninstall librabbitmq

<https://github.com/celery/celery/issues/3675>

# rabbitmq

# slack

<https://slack.com/api/oauth.access?client_id=4b39e9-752c4&client_secret=33fea0113f5b1&code=ccdaa72ad>
