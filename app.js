const port = 4040
const express = require('express')
const app = express()
const morgan = require('morgan')

//const postRoutes =require('./routes/post')

//using destructuring method 
const { getPosts } = require('./routes/post')

// const myOwnMiddleWare = (req, res, next) => {
//     console.log("my own ")
//     next()
// }

// app.use(myOwnMiddleWare)

app.use(morgan('dev'))

app.get("/", getPosts)
app.listen(port, () => [
    console.log(`Server listening on port : ${port}`)
])