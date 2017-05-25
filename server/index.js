const express = require('express');

const app = express();

app.use('/', express.static('public'));
app.use('/js', express.static(__dirname + '/../build/js'));
app.use('/css', express.static(__dirname + '/../build/css'));
app.use('/imgs', express.static(__dirname + '/../build/imgs'));

app.get('/api', (req, res) => {
	res.send('Api route');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Server is running at port ${PORT}`);
