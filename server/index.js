const express = require('express');

const app = express();

app.use('/', express.static('public'));
app.use('/js', express.static(__dirname + '/../build/js'));
app.use('/css', express.static(__dirname + '/../build/css'));
app.use('/imgs', express.static(__dirname + '/../build/imgs'));

app.get('/api', (req, res) => {
	res.json([{
		mainImg: {url: '/imgs/wolff.jpg', alt: ''},
 		avatar: '/imgs/avatar.jpg',
 		name: 'Jake Archibald',
 		time: '2015-08-24T10:34:17.777Z',
 		body: 'A team somewhere spent a long time ensuring Southern Rail ticket machines are as fustrating as possible.'
	},
	{
		mainImg: {url: '/imgs/wolff.jpg', alt: ''},
 		avatar: '/imgs/avatar.jpg',
 		name: 'Anoop Mundathan',
 		time: '2015-08-24T10:34:17.777Z',
 		body: 'Southern Rail ticket machines are as fustrating as possible.'
	}
	]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Servers is running at port ${PORT}`);
