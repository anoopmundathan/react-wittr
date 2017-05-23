import express from 'express';
const app = express();

app.use('/', express.static('dist'));

app.listen(3000);
console.log('Server running at port', 3000);
