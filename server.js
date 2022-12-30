// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
// Install the Express package
const express = require('express');
const app = express();

// GET route that returns the projectData object in server code
app.get('/', (req, res) => {
  res.send(projectData);
});
// POST route that adds incoming data to projectData.
app.post('/', addData);

function addData(req, res) {
  projectData = req.body;
  res.send(projectData);
  console.log(projectData);
}

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// Install the body-parser package

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
// Install the cors package
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
// Create a server running on the port
let port = 3000;

app.listen(port, () => {
  // Test that server is running using Node in the terminal

  console.log(`Server is running on ${port}`);
});
