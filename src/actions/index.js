import axios from 'axios';

export const GET_POSTS = 'get_posts';

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