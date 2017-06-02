import React from 'react';
import Article from './Article';

export const Main = (props) => {	
	console.log(props.posts);
	return(
    	<main className="main">
    		{props.posts.map(post => <Article post={post}/>)}
    	</main>
  	);
}