export const SET_NEW_PLAYER = 'SET_NEW_PLAYER';

const initialState = {
    players: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_NEW_PLAYER: {
            console.log(action.data);
            return {
                ...state,
                players: [...state.players, action.data]
            }
        }
    }
    return state;
}