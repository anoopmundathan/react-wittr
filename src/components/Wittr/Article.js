import React from 'react';
import Avatar from './Avatar';
import PostContent from './Post/PostContent';

const Article = (props) => {
	return(
		<article className="post">
      <Avatar avatar={props.post.avatar}/>
      <PostContent />
    </article>
	);
}

export default Article;