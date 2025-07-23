const {readFile,writeFile, read, write} = require('fs')

readFile('./file1.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
    return
  }
  const result1 = result;
  readFile('./file2.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result;
    writeFile('./result2.txt', `${result1}, ${second}`, 'utf8', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File written successfully.');
});


  })
  

})
console.log("this is show first cause of async")