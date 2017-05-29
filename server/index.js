const express = require('express');
const createMessage = require('./message').createMessage;

const app = express();

app.use('/', express.static('public'));
app.use('/js', express.static(__dirname + '/../build/js'));
app.use('/css', express.static(__dirname + '/../build/css'));
app.use('/imgs', express.static(__dirname + '/../build/imgs'));

app.get('/api', (req, res) => {

	const messages = [];
	for(let i = 0; i < 25; i++) {
		const msg = createMessage();
		msg.time = new Date(Date.now() - (1000 * (10 * i))).toString();
		messages.push(msg)
	}

	res.json(messages);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Servers is running at port ${PORT}`);
