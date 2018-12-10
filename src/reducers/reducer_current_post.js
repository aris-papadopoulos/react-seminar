import { GET_CURRENT_POST } from '../actions';

export default function (state = {}, action) {
    switch(action.type) {
        case GET_CURRENT_POST:
            console.log(action.payload);
            return {
                title: action.payload.title.rendered,
                content: action.payload.content.rendered,
                imageSrc: action.payload._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url,
                imageAlt: action.payload._embedded['wp:featuredmedia'][0].title.rendered
            };
        default:
            return state;
    }
}