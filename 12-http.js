const http = require('http')

//firstparament is like requesting the server and res is response parameter what server is responding

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end("welcome to our home page")
  }
  if(req.url ==='/about'){
    res.end("here is the contact page")
  }
  res.end(`
    <h1>Oops</h1>
    <p>we cant seem to find the page you are looking for </p>
    <a href="/">back home</a>`)

})


server.listen(5000)