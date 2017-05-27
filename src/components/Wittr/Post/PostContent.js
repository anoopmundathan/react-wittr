import React from 'react';
import PostAvatar from './PostAvatar';
import PostTextContent from './PostTextContent';

const PostContent = () => {
	return(
		<div className="post-content">
			<PostAvatar />
     		<PostTextContent />
        </div>
	);
}

export default PostContent;