
const http = require('http')

const server = http.createServer((req, res)=> {
    res.setHeader('Content-Type','text/plain');

    res.end('Hello from raw Node.js Server!')

});

const PORT = 3000; // assigning port number to 3000

server.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`);

})