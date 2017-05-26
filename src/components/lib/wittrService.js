const baseUrl = '/api';

export const fetchPosts = () => {
	return fetch(baseUrl)
		.then(response => response.json());
}
