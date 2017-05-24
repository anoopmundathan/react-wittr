import express from 'express';


const app = express();

app.use('/', express.static(__dirname + '/../public'));
app.use('/js', express.static(__dirname + '/../dist'));
app.use('/css', express.static(__dirname + '/../dist'));
app.use('/imgs', express.static(__dirname + '/../public/imgs'));

app.listen(3000);
console.log('Server running at port', 3000);
