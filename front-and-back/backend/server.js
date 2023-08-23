const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get('/get-message', (req, res) => {
  console.log('GET request received');
  res.json({ message: 'Hello from the server!' });
  console.log('GET response sent');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});