const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./file1.txt','utf8');
const second = readFileSync('./file2.txt','utf8');
const result = readFileSync('./result-sync.txt','utf8');

console.log(first,second,result)

writeFileSync('./result-sync.txt',`here is the result ${first},${second}`)
console.log("this will show after the writeFilesync cause of sync")