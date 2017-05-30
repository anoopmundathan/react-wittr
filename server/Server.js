const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const url = require('url');
const createMessage = require('./message').createMessage;

function findIndex(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) return i;
  }
  return -1;
}

function Server() {
	this._app = express();
    this._messages = [];
    this._sockets = [];
    this._server = http.createServer(this._app);
    this._wss = new WebSocket.Server({ server: this._server });
    this._wss.on('connection', ws => this.onWsConnection(ws));
    
    this._app.use('/', express.static('public'));
	this._app.use('/js', express.static(__dirname + '/../build/js'));
	this._app.use('/css', express.static(__dirname + '/../build/css'));
	this._app.use('/imgs', express.static(__dirname + '/../build/imgs'));

 	this._app.get('/api', (req, res) => {
		const messages = [];
		for(let i = 0; i < 25; i++) {
			const msg = createMessage();
			msg.time = new Date(Date.now() - (1000 * (10 * i))).toString();
			messages.push(msg)
		}
		res.json(messages);
	});

	// generate initial messages
    let time = new Date();

    for (let i = 0; i < 10; i++) {
      const msg = createMessage();
      // const timeDiff = random(5000, 15000);
      // time = new Date(time - timeDiff);
      // msg.time = time.toISOString();
      this._messages.push(msg);
    }

    this.generateDelayedMessages();

}

Server.prototype.listen = function(port) {
	this._server.listen(port, () => {
		console.log(`Server running at port ${port}`);
	});
}

Server.prototype.onWsConnection = function(socket) {

	// const requestUrl = url.parse(socket.upgradeReq.url, true);
    
 //    if (requestUrl.pathname != '/api') {
 //      socket.close();
 //      return;
 //    }

    // this._sockets.push(socket);

    // socket.on('close', _ => {
    //   this._sockets.splice(this._sockets.indexOf(socket), 1);
    // });

    // let sendNow = [];

    // if (requestUrl.query.since) {
      // const sinceDate = new Date(Number(requestUrl.query.since));
      // let missedMessages = findIndex(this._messages, msg => new Date(msg.time) <= sinceDate);
      // if (missedMessages == -1) missedMessages = this._messages.length;
      // sendNow = this._messages.slice(0, missedMessages);
    // }
    // else {
      // sendNow = this._messages.slice();
    // }

    // socket.send(JSON.stringify(sendNow));
}

Server.prototype.broadcast = function(obj) {
	const msg = JSON.stringify(obj);
    this._sockets.forEach(socket => socket.send(msg));
}

Server.prototype.generateDelayedMessages = function() {
	// setTimeout(_ => {
 //      this.addMessage();
 //      this.generateDelayedMessages();
 //    }, random(5000, 15000));

    setTimeout(_ => {
      this.addMessage();
      this.generateDelayedMessages();
    }, 3000);
}

Server.prototype.addMessage = function() {
	const message = createMessage();
    this._messages.unshift(message);
    this._messages.pop();
    this.broadcast([message]);
}

module.exports = Server;