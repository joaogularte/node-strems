const fs = require('fs');
const server = require('http').createServer();

const arquivo = 'ARQUIVO GRANDE';

fs.readFile(arquivo, (err, dados) => {
  if (err) throw err;
  server.on('request', (request, response) => {
    response.writeHead(200, { 'Content-Type' : 'image/jpeg' });
    response.end(dados);
  })
  server.listen(5858, () => console.log("Server is running"));
})