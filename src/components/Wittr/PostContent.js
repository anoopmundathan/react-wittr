import React from 'react';

const PostContent = (props) => {
	return(
		<div className="post-content">
			
			<img 
				src={props.mainImg.url} 
				alt={props.mainImg.alt} 
				className="post-avatar" 
				width="40" 
				height="40" />
				
     		<div className="post-text-content">
      			<div className="post-title">
        			<div>
      					<h1 className="post-heading">{props.name}</h1>
      					<time datetime={props.time} className="post-time">43s</time>
      					<p>
        					{props.body}
      					</p>
    				</div>
      			</div>
    		</div>  
        </div>
	);
}

export default PostContent;