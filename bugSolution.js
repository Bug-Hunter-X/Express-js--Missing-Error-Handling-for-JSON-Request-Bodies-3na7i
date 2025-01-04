const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body) {
    return res.status(400).send({ error: 'Missing request body' });
  }
  try {
    const user = JSON.parse(JSON.stringify(req.body)); //Added for extra safety.  Not strictly necessary if you're sure req.body is properly parsed.
    //Further validation can be done here (e.g., schema validation)
    console.log(user);
    res.status(201).send();
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send({ error: 'Invalid JSON in request body' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));