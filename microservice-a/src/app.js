// const express = require('express');
// const app = express();
// const port = 3001;

// app.get('/', (req, res) => {
//   res.send('Hello from Microservice A!\n');
// });

// app.listen(port, () => {
//   console.log(`Microservice A is running on port ${port}`);
// });
const express = require('express');
const axios = require('axios'); // Use axios to make HTTP requests
const app = express();
const port = 3001;

// Endpoint that makes a request to Microservice B
app.get('/request-microservice-b', async (req, res) => {
  try {
    const response = await axios.get('http://microservice-b:4000');
    res.send(`Response from Microservice B: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error communicating with Microservice B');
  }
});

app.listen(port, () => {
  console.log(`Microservice A is running on port ${port}`);
});
