import express from 'express';
import path from 'path';

const app = express();
app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use('/imgs', express.static(path.join(__dirname, '..', 'public/imgs')));
app.get('/js/bundle.js', (req, res) => {

  // Serve bundle according to node environment
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, 'bundle.js'));
  } else if(process.env.NODE_ENV === 'test') {
    res.sendFile(path.join(__dirname, '..','dist', 'bundle.js'));
  }
});

app.listen(3000);
console.log('Server running at port', 3000);
