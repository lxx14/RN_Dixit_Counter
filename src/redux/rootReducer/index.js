import { combineReducers } from 'redux';
import players from '../../screens/SettingsScreen/reducers';
import endRound from '../../screens/MainScreen/reducers'

const rootReducer = combineReducers({
    players,
    endRound
})

export default rootReducer;