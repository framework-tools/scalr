console.log('hello')

import Koa from 'koa'
import etcd from 'etcd3';
import axios from 'axios';
const { Etcd3 } = etcd
const client = new Etcd3();

// start koa app (maybe ProGraph API)
// await client.put('foo').value('bar')
// console.log(await client.get('foo'))

let app = new Koa()
// app.listen(80)

// setup koa app that sets up API
// use etcd for APi

let info = {
    pods: [
        { 
            ip: '127.0.0.1',
            namespace: 'live',
            service: 'frontend',
            deployment: '2',
            node: '127.0.0.1'
        }
    ],
    nodes: [
        {
            ip: '127.0.0.1',
            status: 'running'
        }
    ],
    namespace: [
        {
            name: 'live',

        }
    ],
    services: [
        {
            name: 'frontend',

        }
    ]
}

// TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"` \
// && curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/

async function getEC2AccessToken() {
    console.log('Printing token:')
    console.log(await axios.put('http://169.254.169.254/latest/api/token'))
    let { data } = await axios.put('http://169.254.169.254/latest/api/token', null,  {
        headers: {
            'X-aws-ec2-metadata-token-ttl-seconds': '21600'
        }
    })

    console.log(data)
    
    return data
}

console.log(await getEC2AccessToken())