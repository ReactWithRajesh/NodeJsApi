
const express = require('express')
const app = express()
const morgan = require('morgan')
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
env.config()
const port = process.env.PORT || 4040
const uri = process.env.MONGO_URI

//db connection 
mongoose.connect(uri)
  .then(() => console.log('Db connected.'))

mongoose.connection.on('error', err => {
  console.log(`db connection has some error: ${err.message}`)
})
// const mongooseOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false, // optional, depending on your use case
//   useCreateIndex: true,    // optional, depending on your use case
//   user: 'rjReactDev',      // replace with your MongoDB username
//   pass: '90QcwhEs8LNtwy7L', // replace with your MongoDB password
//   authSource: 'admin',     // replace with your MongoDB authSource
//   replicaSet: 'atlas-mbmwke-shard-0', // replace with your replicaSet
//   ssl: true,               // optional, depending on your MongoDB configuration
//   retryWrites: true,
// };

// db connection with mongodb driver

// const client = new MongoClient(uri, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     // await listDatabases(client);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//get all database list
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//const postRoutes =require('./routes/post')

//using destructuring method 
//const { getPosts } = require('./routes/post')

//app.get("/", getPosts)
//using controller
const postRouter = require('./routes/post')

// const myOwnMiddleWare = (req, res, next) => {
//     console.log("my own ")
//     next()
// }

// app.use(myOwnMiddleWare)

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use("/", postRouter)

app.listen(port, () => [
  console.log(`Server listening on port : ${port}`)
])