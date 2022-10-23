const fs = require('fs');
const http = require('http').createServer();
// const rhttp = http.createServer();
// rhttp.on('connect',()=>{
//     console.log('spme')
// })
const stream = fs.createReadStream('hello.txt', 'utf-8');

http.on('request',()=>{
    
})
