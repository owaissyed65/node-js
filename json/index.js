const fs = require('fs');

const myData = {
    name: "owais",
    studentID: "csc-22s-142",
    semester: "2nd"
}
const jsonData = JSON.stringify(myData);
// console.log(myData);
// console.log(jsonData);

// fs.writeFile('index.json', jsonData, (err) => {
//     console.log('Done')
// })
fs.readFile('index.json', 'utf-8', (err, data) => {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
})
console.log(__dirname);
console.log(__filename);
// thats called iifee
(function () {

})
