import fastify from 'fastify'

const app = fastify()

app.get('/', (_req, reply) => reply.send({ hello: 'world' }))

export { app }
