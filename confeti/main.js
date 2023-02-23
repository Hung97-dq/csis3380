const express = require("express")
app = express();

const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);

const homeController = require("./controllers/homeController") 
const subscribersController = require("./controllers/subscribersController");



app.set("port", process.env.PORT || 3000);

app.get("/", (req,res) =>{
    res.render("index");

});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))


app.get("/courses", homeController.showCourses);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/contact", subscribersController.saveSubscriber);





app.listen(app.get("port"), () =>{
    console.log(
        `Server running at http://localhost:${app.get("port")}`
    );
});