const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const path=require("path")
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","index.html"))
})
app.post("/",(req,res)=>{
    let num1=+req.body.n1;
    let num2=+req.body.n2;
    let result=num1+num2;
    res.send(`the result is ${result}`)
}
)
app.listen(3000,()=>{
    console.log("running server")
})