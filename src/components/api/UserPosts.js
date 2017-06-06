export default class UserPosts {
	
	openSocket(cb) {

		const socketUrl = new URL('/api', window.location);
		socketUrl.protocol = 'ws';
  		var ws = new WebSocket(socketUrl.href);
  		
  		ws.addEventListener('open', function() {
  			console.log('message is open');
  		});

  		ws.addEventListener('message', function(evt) {
  			requestAnimationFrame(function() {
  				cb(evt.data);	
  			});
  		});

  		ws.addEventListener('close', function() {
  			console.log('message is close');
  		});
	}

}
