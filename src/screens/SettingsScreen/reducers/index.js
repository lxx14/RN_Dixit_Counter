export const SET_NEW_PLAYER = 'SET_NEW_PLAYER';
export const UDATE_TOTAL_SCORE = 'UDATE_TOTAL_SCORE';

const initialState = {
    players: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_NEW_PLAYER: {
            return {
                ...state,
                players: [...state.players, action.data]
            }
        }
        case UDATE_TOTAL_SCORE: {
            return {
                ...state,
                players: state.players.map(item => {
                    if (action.data.id === item.id) {
                        item.totalScore = action.data.totalScore
                    } 
                    return item
                })
            }
        }
        default: return state;
    }
}