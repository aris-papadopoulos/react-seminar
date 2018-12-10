import { GET_CURRENT_POST } from '../actions';

export default function (state = {}, action) {
    switch(action.type) {
        case GET_CURRENT_POST:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}