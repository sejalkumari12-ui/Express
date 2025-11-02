import express from 'express'

const app = express()

app.use(function(req,res,next){
  console.log("middleware working")
  next()
})
 app.set("view engnie","ejs")

app.get ("/profile/:username",(req,res)=>{
 res.render("index.ejs")
})

app.listen(3000)