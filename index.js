const express=require("express")
const app=express();
const mongoose=require("mongoose");
const path=require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>{console.log("on mongo")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(8080,()=>{
  console.log("ok");
})

app.get("/",(req,res)=>{
   res.send("ok");
})

/*
 npm init -y
  npm i express 
  npm i ejs   
  npm i mongoose

  */
