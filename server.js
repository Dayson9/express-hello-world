
const express= require('express');

const app = express();
const path = require('path');
const filePath = path.resolve(__dirname, 'index.html')
app.get('/', (req, res) => {
  res.send('server-af2h.onrender.com');
});

app.get('/books', (req, res) => {
  res.sendFile(filePath);

  res.json({
        status: 'success',
        message: 'The stuff is received successfully!'
    });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  
