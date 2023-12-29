const express= require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('server-af2h.onrender.com');
});

app.get('/books', (req, res) => {
  res.send([
    {id: 1, title: 'book 1'},
    {id: 2, title: 'book 2'},
  ]);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  
