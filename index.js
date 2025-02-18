const express= require("express");
const app= express();

const port=8080;
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
    res.send("home");
});
app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs");
}); 


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});