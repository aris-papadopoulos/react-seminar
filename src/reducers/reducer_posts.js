import { GET_POSTS } from '../actions';
// import _ from 'lodash';

export default function (state = [], action) {
    switch(action.type) {
        case GET_POSTS:
        // let newState = action.payload.reduce((acc, cur) => ({...acc, [cur.id]: {
        //     title: cur.title.rendered,
        //     excerpt: cur.excerpt.rendered,
        //     featured_media: {
        //         title: cur._embedded['wp:featuredmedia'][0].title.rendered,
        //         url: cur._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url
        //     },
        //     slug: cur.slug
        // }
        // }), {});
        let newState = action.payload.map(post => {
            return {
                id: post.id,
                title: post.title.rendered,
                excerpt: post.excerpt.rendered,
                featured_media: {
                    title: post._embedded['wp:featuredmedia'][0].title.rendered,
                    url: post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url
                },
                slug: post.slug
            }
        });
            return newState;
        default:
            return state;
    }
}