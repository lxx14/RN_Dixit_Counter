export const SET_END_ROUND = 'SET_END_ROUND';

const initialState = false

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_END_ROUND: {
            return action.data
        }
    }
    return state;
}