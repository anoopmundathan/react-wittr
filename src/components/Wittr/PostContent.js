import React from 'react';

const PostContent = (props) => {
	return(
		<div className="post-text-content">
  			<div className="post-title">
  					<h1 className="post-heading">{props.name}</h1>
  					<time datetime={props.time} className="post-time">{props.time}</time>
  			</div>
        <p>
          {props.body}
        </p>
		</div>  
	);
}

export default PostContent;