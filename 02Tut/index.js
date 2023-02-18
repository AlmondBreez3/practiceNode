const fs = require('fs');
const path =require('path');

fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})

console.log('Hello....');

//exit on uncaught errors
process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

//callback안에 차례로 함수를 넣고 해서 원하는 대로 순서를 짤 수 있다!

fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to meet you', (err)=>{
    if(err) throw err;
    console.log('Write complete')
    fs.appendFile(path.join(__dirname,'files','reply.txt'), '\n\nYes it is', (err)=>{
        if(err) throw err;
        console.log('Append complete')
        fs.rename(path.join(__dirname,'files','reply.txt'), path.join(__dirname,'files','newReply.txt'), (err)=>{
            if(err) throw err;
            console.log('Rename complete')
        })
    })
})
