import { GET_CURRENT_POST } from '../actions';
import { LOADING_POST } from '../actions';

let currentID = null;

export default function (state = {}, action) {
    switch(action.type) {
        case LOADING_POST:
            currentID = action.payload;
            // Check if post page changed
            if (currentID !== action.payload.id) {
                return {
                    isLoading: true
                }
            }
            else {
                return state;
            }
        case GET_CURRENT_POST:
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