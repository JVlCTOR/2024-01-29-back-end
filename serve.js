const fastify = require('fastify')({
    logger: false
  })

 const PORT = 5005 

fastify.get('/', (req, res) => {
    res.send('Servido rodando')
  })
fastify.get('/produto', (req,res)=>{
    res.send('servido rodando produtos')
})

fastify.listen({ port:PORT }, (err, address) => {
    if (err) throw err
    console.log(`Server is now listening on ${address}`);
})