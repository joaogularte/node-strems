const fs = require('fs');
const server = require('http').createServer();

const arquivo = 'ARQUIVO GRANDE';

server.on('request', (request, response) => {
    const options = { highWaterMark: 64*1024 };
    fs.createReadStream(arquivo, options).pipe(response)
});