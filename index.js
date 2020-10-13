
const env = {
    namespace: 'live',
    domain: 'framework.test',
}

//remove the namespace prefix if in main namespace
let includeNamespace = !['test', 'live'].includes(env.namespace)
let domain = `${includeNamespace ? env.namespace + '.' : ''}${env.domain}`
let dev = env.namespace !== 'live'
let settings

export default settings = {
    namespace: env.namespace,
    services: {
        frontend: {
            ...dev && {devdomain: domain},
            containers: [{
                dockerfile: 'frontend/Dockerfile',
                ...dev && {
                    mount: 'frontend:/frontend'
                }
            }]
        },
        backend: {
            ...dev && {devdomain: `api.${domain}`},
            containers: [{
                dockerfile: 'backend/Dockerfile',
                ...dev && {
                    mount: 'backend:/backend'
                }
            }]
        }
    }
}

console.dir(settings, { depth: null, colors: true})