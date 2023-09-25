// const express = require('express');
// const app = express();
// const port = 4000;

// app.get('/', (req, res) => {
//   res.send('Hello from Microservice B!\n');
// });

// app.listen(port, () => {
//   console.log(`Microservice B is running on port ${port}`);
// });


const express = require('express');
const axios = require('axios'); // Use axios to make HTTP requests
const app = express();
const port = 4000;

// Endpoint that makes a request to Microservice A
app.get('/request-microservice-a', async (req, res) => {
  try {
    const response = await axios.get('http://microservice-a:3000');
    res.send(`Response from Microservice A: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error communicating with Microservice A');
  }
});

app.listen(port, () => {
  console.log(`Microservice B is running on port ${port}`);
});
