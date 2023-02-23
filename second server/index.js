const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us Page</h1>",
    "/about": "<h1>About Us Page</h1>",
    "/hello": "<h1>Say Hello Page</h1>",
    "/Error": "<h1>Sorry Page</h1>"
}
const port =3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();
app.on("request", (req,res) =>{
    res.writeHead(httpStatus.OK,
        {
            "Content-Type": "text/html",
        });
        if(routeResponseMap[req.url]){
            res.end(routeResponseMap[req.url]);
        }
        let responseMessage ="<h1>This will show on the screen.</h1>";
        // console.log(req.method);
        // console.log(req.url);
        // console.log(req.headers);
        console.log(`Header;${getJSONString(req.headers)}`);
        res.end(responseMessage);
        
});

const getJSONString = obj =>{
    return JSON.stringify(obj, null,2);
}

app.listen(port, () =>{
    console.log(`The server has started and is listening on port number: ${port}`);
});
