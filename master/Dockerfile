FROM node:14-alpine

WORKDIR /cluster

# Add Docker runtime #openrc
RUN apk add --update --no-cache docker iptables

# RUN rc-update add docker boot
# RUN dockerd
# RUN service docker start
# RUN sleep 50s
COPY . .

# RUN chmod u+x ./start

RUN npm i -g nodemon

CMD nodemon