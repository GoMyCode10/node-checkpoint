const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'});
    res.end('Hello World\n');
    });
    server.listen(3000)

    console.log('Server running at http://localhost:3000/');