FROM node:14-alpine

# install Go
RUN apk --no-cache add make curl musl-dev go

# ENV GOROOT /usr/lib/go
# ENV GOPATH /go
# ENV PATH /go/bin:$PATH

# RUN go version

# install etcd
RUN ETCD_VER=v3.4.1 \
&& DOWNLOAD_URL=https://github.com/etcd-io/etcd/releases/download \
&& curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz \
&& mkdir -p /etcd \
&& tar xzvf /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz -C /etcd --strip-components=1 \
&& rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
ENV PATH /etcd:$PATH

WORKDIR /cluster

COPY . .

CMD etcd