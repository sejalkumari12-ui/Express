import express from 'express'

const app = express()

app.use(function(req,res,next){
  console.log("middleware working")
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)