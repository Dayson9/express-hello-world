const express= require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('server-af2h.onrender.com');
});
});

app.get('/books', (req, res) => {
  res.json({
        status: 'success',
        message: 'Data received successfully!'
    });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  
