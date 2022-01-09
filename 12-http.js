const http = require('http');
 
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('home')
    }
    if(req.url === '/about'){
        res.end('about page')
    }
    res.end('not existing')
    //res.write('welcome to home page')
    res.end()
})

server.listen(5000)