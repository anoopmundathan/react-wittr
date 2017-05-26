import React, {Component} from 'react';

import {Header, Main} from './Wittr';
import {fetchPosts} from './lib/wittrService';

class App extends Component {

	constructor() {
		super();
		this.state = {
			posts: []
		}
	}
	

	componentDidMount() {
		fetchPosts()
			.then(posts => this.setState({posts: posts}));
	}

	render() {
		return(
			<div>
				<Header/>
				<Main/>
			</div>
    	);
	}
}

export default App;
