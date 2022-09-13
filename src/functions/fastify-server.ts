import fastify from 'fastify'

const app = fastify()

const test = 'TEST'
const envVar = process.env[test]
app.get('/', (_request, reply) => reply.send({ hello: 'world', env: envVar ?? 'NADA' }))

export { app }
