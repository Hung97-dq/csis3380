var user=[];

exports.getSubscriptionPage = (req, res) => {
 res.render("contact", {subscribers: user});
};

exports.saveSubscriber = (req, res) => {
    
    var name = req.body.name;
    var email = req.body.email;
    var zipCode = req.body.zipCode;
    var sub = {name: name, email:email, zipCode:zipCode}
    user.push(sub);
    
    console.log(user);
    res.render("contact", {subscribers: user});
};