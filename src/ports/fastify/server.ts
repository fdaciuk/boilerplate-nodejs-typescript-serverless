import fastify from 'fastify'

const app = fastify()

app.get('/', (_request, reply) => reply.send({ hello: 'world' }))

export { app }
