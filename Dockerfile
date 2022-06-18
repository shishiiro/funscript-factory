FROM node:18-bullseye

WORKDIR /opt/funscript-factory
RUN apt-get update
RUN apt-get upgrade
RUN apt-get install -y lsof git vim
