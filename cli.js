#!/usr/bin/env node

const env = {
    namespace: 'prod',
    domain: 'framework.com',
}

//remove the namespace prefix if in main namespace
let includeNamespace = !['local', 'prod'].includes(env.namespace)
let domain = `${includeNamespace ? env.namespace + '.' : ''}${env.domain}`
let dev = env.namespace !== 'prod'
let settings

export default settings = {
    namespace: env.namespace,
    services: {
        frontend: {
            devdomain: domain,
            containers: [{
                dockerfile: 'frontend/Dockerfile',
                ...dev && {
                    mount: 'frontend:/frontend'
                }
            }]
        },
        backend: {
            devdomain: `api.${domain}`,
            containers: [{
                dockerfile: 'backend/Dockerfile',
                ...dev && {

                    //
                    mount: 'backend:/backend'
                }
            }]
        }
    }
}