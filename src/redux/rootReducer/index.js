import { combineReducers } from 'redux';
import players from '../../screens/MainScreen/reducers';

const rootReducer = combineReducers({
    players
})

export default rootReducer;