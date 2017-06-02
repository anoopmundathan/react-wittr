import React, {Component} from 'react';

import {Header, Main} from './Wittr';
import {fetchPosts} from './lib/wittrService';

class UserPosts {
	
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

class App extends Component {

	constructor() {
		super();
		this.state = {
			posts: []
		}
	}
	
	componentDidMount() {
		const userPosts = new UserPosts();
		const posts = [];

		userPosts.openSocket(data => {
			const post = JSON.parse(data);
			posts.unshift(post);
			this.setState({posts: posts});
		});
	}

	render() {
		return(
			<div>
				<Header/>
				<Main posts={this.state.posts}/>
			</div>
    	);
	}
}

export default App;
