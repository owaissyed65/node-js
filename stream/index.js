const fs = require('fs');
const http = require('http').createServer();
// const rhttp = http.createServer();
// rhttp.on('connect',()=>{
//     console.log('spme')
// })
const stream = fs.createReadStream('hello.txt');

http.on('request', (req, res) => {
    console.log('done')
    // 1st way
    // stream.on('data', (chunkData) => {
    //     res.write(chunkData)
    // });
    // stream.on('end', () => {
    //     res.end()
    // });
    // stream{
    //     data,end,error,close
    // }


    // 2nd way
    // fs.readFile('hello.txt', 'utf-8', (err, data) => {
    //     res.end(data);
    // })


    // 3rd way
    stream.pipe(res, false)


});
http.listen(5000, '127.0.0.1', () => {
    console.log(`Ports listening on ${5000} in http://localhost:5000`)
})
