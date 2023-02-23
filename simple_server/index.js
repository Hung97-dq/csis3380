const http = require('http');

app = http.createServer((req,res) =>{
    res.write('<html><body><h1>Hello, World!</h1></body></html>');
    res.end();
})

app.listen(3000, (err) =>{
    console.log('Listening on 3000')
})