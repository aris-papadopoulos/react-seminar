import { GET_POSTS } from '../actions';
// import _ from 'lodash';

export default function (state = [], action) {
    switch(action.type) {
        case GET_POSTS:
        let newState = action.payload.map(post => {
            return {
                id: post.id,
                title: post.title.rendered,
                excerpt: post.excerpt.rendered,
                featured_media_id: post.featured_media,
                slug: post.slug
            }
        });
        
        console.log(action.payload);
        console.log(newState);
            return newState;
        default:
            return state;
    }
}