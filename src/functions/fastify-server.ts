import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = fastify()

app.get('/', async (_req, reply) => {
  const databaseUrlString = 'DATABASE_URL'
  console.log('process.env.DATABASE_URL', process.env[databaseUrlString])
  const newUser = await prisma.user.create({
    data: {
      email: 'user@email.com',
      name: 'The user',
    },
  })
  console.log('\n\n\n', newUser, '\n\n\n')
  reply.send({ hello: 'world' })
})

export { app }
