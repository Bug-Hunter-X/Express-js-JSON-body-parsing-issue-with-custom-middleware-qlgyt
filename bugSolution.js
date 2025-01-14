const express = require('express');
const app = express();
// Place express.json() before other middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log('Request received');
  next();
});
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));