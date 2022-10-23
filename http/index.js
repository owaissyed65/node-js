
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('WE are in home')
    } else if (req.url == '/about') {
        res.end('WE are in about')
    }

})
server.listen(5000, '127.0.0.1', () => {
    console.log(`http://localhost:${5000}`)
})
