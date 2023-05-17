import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Method: GET, POST, PUT, PATCH, DELETE;

// criando rota
app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

// promises
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
