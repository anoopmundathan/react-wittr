import React from 'react';
import Avatar from './Avatar';
import PostContent from './PostContent';

const Article = (props) => {
	return(
		<article className="post">
      <div className="post-content">
        <img src={props.post.avatar} alt="" className="post-avatar" />
        <PostContent 
          mainImg={props.post.mainImg} 
          name={props.post.name} 
          time={props.post.time} 
          body={props.post.body} />
      </div>
    </article>
	);
}

export default Article;