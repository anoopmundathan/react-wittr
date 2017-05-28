const express = require('express');
const generateMessage = require('./generateMessage');

const app = express();

app.use('/', express.static('public'));
app.use('/js', express.static(__dirname + '/../build/js'));
app.use('/css', express.static(__dirname + '/../build/css'));
app.use('/imgs', express.static(__dirname + '/../build/imgs'));

app.get('/api', (req, res) => {

	const messages = [];
	for(let i = 0; i < 25; i++) {
		const message = {};
		const genMessage = generateMessage.generateMessage();
		message.mainImg = {url: '/imgs/dr-evil.gif', alt: 'wolf'};
		message.avatar = '/imgs/avatar.jpg';
 		message.name = 'Jake Archibald';
 		message.time = '2015-08-24T10:34:17.777Z';
 		message.body = genMessage.msg;
		messages.push(message);
	}
	res.json(messages);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Servers is running at port ${PORT}`);
