import axios from 'axios';

export const GET_POSTS = 'get_posts';
export const GET_CURRENT_POST = 'get_current_post';

export function getPosts() {
    const request = axios.get('https://blog.ferriesingreece.com/wp-json/wp/v2/posts?_embed');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ 
                type: GET_POSTS, 
                payload: data
            })
        });
    };
}

export function getCurrentPost(slug) {
    const request = axios.get(`https://blog.ferriesingreece.com/wp-json/wp/v2/posts/?slug=${slug}`);

    return (dispatch) => {
        // Initial Request using slug from url
        request.then(({data}) => {
            // Second Request after getting post ID
            const nextRequest = axios.get(`https://blog.ferriesingreece.com/wp-json/wp/v2/posts/${data[0].id}?_embed`);
            nextRequest.then(({data}) => {
            // Now dispatch the action
            dispatch({ 
                type: GET_CURRENT_POST, 
                payload: data
            })
        });
    });
    };
}