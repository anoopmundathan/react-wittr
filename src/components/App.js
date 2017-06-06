import React, {Component} from 'react';

import {Header, Main} from './Wittr';
import {fetchPosts} from './lib/wittrService';

import	UserPosts from './api/UserPosts';

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
