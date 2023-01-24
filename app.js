const fs = require('fs');
//if its your file, you need a ./
const scoreFunctions = require('./scoreFunctions');

console.log('hello world');

fs.readFile('scores.txt',(err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(scoreFunctions.processScores(data.toString()));
    }
});

/*
setTimeout(()=>{
    console.log('done');
}, 0)

console.log('hello world again!');

while(true){

}
*/