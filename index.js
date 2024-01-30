const http = require('http')

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Resposta enviada!')
})

server.listen(port, hostname, ()=>{
    console.log(`servido estado rodando : http://${hostname}:${port}`);
})