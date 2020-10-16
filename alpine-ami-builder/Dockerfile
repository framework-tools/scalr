FROM 'alpine'

RUN apk add git

COPY . /cluster-alpine
WORKDIR /cluster-alpine

RUN git clone https://github.com/mcrute/alpine-ec2-ami.git

CMD sh ./start