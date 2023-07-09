import fastify from "fastify";

const server = fastify();


server.get('/hello', (req, res) => {
  return 'Hello World!';
})

server.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running on port 3333 ⊱🚀')
})