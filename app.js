const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
})
app.get("/verify",function(req,res){
    res.render("verify");
})
app.get("/details",function(req,res){
    res.render("details");
})
app.get("/home",function(req,res){
    res.render("home");
})
app.get("/tournDetails",function(req,res){
    res.render("tournDetails");
})
app.get("/leaderboard",function(req,res){
    res.render("leaderboard");
})
app.get("/prevMatch",function(req,res){
    res.render("prevMatch");

})
app.get("/matchSch",function(req,res){
    res.render("matchSch");

})

app.get("/admin",function(req,res){
    res.render("admin");
})
app.listen(process.env.PORT || 1000,function(){
    console.log("server running on port 1000");
    
})
  