const eventEmitter = require('events');
const event = new eventEmitter();
event.on('helloWorld', (sc,msg) => {
    console.log(`${sc} is ${msg} `)

})
event.emit("helloWorld", 200, 'ok');