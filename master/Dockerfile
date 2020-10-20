FROM alpine:latest

WORKDIR /cluster

# Add Docker runtime
RUN apk add --update --no-cache docker openrc
RUN rc-update add docker boot

COPY . .

RUN chmod u+x ./start

CMD sh ./start