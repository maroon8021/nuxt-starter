const express = require("express")
const exapp = express()

exapp.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

exapp.get("/get", (req, res) => {
  console.log('called')
  res.send([
    {
      id : 1,
      content : "Content 1"
    },
    {
      id : 2,
      content : "Content 2"
    },
    {
      id : 3,
      content : "Content 3"
    },
    {
      id : 4,
      content : "Content 4"
    }
  ])
})

exapp.get("/get-more", (req, res) => {
  console.log('called')
  res.send([
    {
      id : 1,
      content : "Content 1"
    },
    {
      id : 2,
      content : "Content 2"
    },
    {
      id : 3,
      content : "Content 3"
    },
    {
      id : 4,
      content : "Content 4"
    },
    {
      id : 5,
      content : "Content 5"
    },
    {
      id : 6,
      content : "Content 6"
    },
    {
      id : 7,
      content : "Content 7"
    }
  ])
})

exapp.listen(7170)
console.log('server is now listening 7170')