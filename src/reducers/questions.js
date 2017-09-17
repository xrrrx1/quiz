import { FETCH_QUESTION } from '../constants/questions'
// init states from reducers
const INITIAL_STATE = {
    question: null
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            return { ...state, question: action.payload };
        default:
            return state;
    }
}