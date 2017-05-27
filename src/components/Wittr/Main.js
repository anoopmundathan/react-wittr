import React from 'react';
import Article from './Article';

export const Main = (props) => {	
	return(
    	<main className="main">
    		{props.posts.map(post => <Article posts={post}/>)}
    	</main>
  	);
}