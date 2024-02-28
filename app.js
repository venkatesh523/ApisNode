/*
// Requiring module
const express = require('express');
const morgan = require('morgan');

// Creating express object
const app = express();
//morgan
app.use(morgan('tiny'))
app.use(require('./routes/index.routes'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Handling GET request
/*
app.get('/', (req, res) => { 
	res.send('A simple Node App is '
		+ 'running on this server') 
	res.end() 
}) 

// Handling POST request
app.get('/', (req, res) => { 
	res.json({message: 'Hello'}) 
	res.end() 
}) 

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
*/

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://btrprasad06:09290042250@cluster0.p5xatyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const hello = require('./hello');
//OS Built in module, userInfo
const os = require('os');
const userInfo = os.userInfo();


//hello func
hello.myfunction();
hello.sayHello('Node js');


//Global Variable
/*
global.myVariable = "Hello Node js";
console.log(myVariable);
// __dirname This variable stores the path to the current working directory.
console.log(__dirname);
// __filename This variable stores the path to the current working file.
console.log(__filename);
*/


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//OS
console.log(userInfo);
