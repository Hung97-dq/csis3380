port = 3000,
express = require("express"),
app = express();

app.get("/", (req,res) =>{
    res.send(`Hello, Universe`);
});

app.get("/items", (req,res) =>{
    res.send(`This is the place for vegetables`);
});

app.get("/:menu/:vegetables", (req,res) =>{
    var veg = req.params.vegetables;
    var menu = req.params.menu;
    res.send(`This place for menu `+ menu + veg);
});

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`);
})