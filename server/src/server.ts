import fastify from 'fastify'

const app = fastify()

// HTTP Method: GET, POST, PUT, PATCH, DELETE;

// criando rota
app.get('/hello', () => {
  // metodo get: acessando o endereço pelo navegador
  return 'hello world'
})

// promises
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
