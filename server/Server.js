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
  
  // WebSocket
  this._server = http.createServer(this._app);
  this._wss = new WebSocket.Server({ server: this._server, path: '/api' });
  this._wss.on('connection', ws => this.onWsConnection(ws));

  this._app.use('/', express.static('public'));
	this._app.use('/js', express.static(__dirname + '/../build/js'));
	this._app.use('/css', express.static(__dirname + '/../build/css'));
	this._app.use('/imgs', express.static(__dirname + '/../build/imgs'));

  this.generateDelayedMessages();
}

Server.prototype.generateMessage = function() {
    let time = new Date();
    let msg = createMessage();  
    let timeDiff = Math.floor(Math.random() * 10001) + 5000;
    time = new Date(time - timeDiff);
    msg.time = time.toString();
    return msg;
}

Server.prototype.onWsConnection = function(socket) {
  this._sockets.push(socket);

    socket.on('close', _ => {
      this._sockets.splice(this._sockets.indexOf(socket), 1);
    });

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

    for(let i = 0; i < 5; i++) {
      let msg = this.generateMessage();
      socket.send(JSON.stringify(msg));
    }
}

Server.prototype.broadcast = function(obj) {
	const msg = JSON.stringify(obj);
  this._sockets.forEach(socket => socket.send(msg));
}

Server.prototype.generateDelayedMessages = function() {
	let random = Math.floor((Math.random() * 10001) + 5000);
  setTimeout(_ => {
    this.broadcast(this.generateMessage());
    this.generateDelayedMessages();
  }, random);
}

Server.prototype.listen = function(port) {
  this._server.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
}

module.exports = Server;