import React from 'react';
import Avatar from './Avatar';
import PostContent from './PostContent';

const Article = (props) => {
	return(
		<article className="post">
      <Avatar avatar={props.post.avatar}/>
      <PostContent 
        mainImg={props.post.mainImg} 
        name={props.post.name} 
        time={props.post.time} 
        body={props.post.body} />
    </article>
	);
}

export default Article;