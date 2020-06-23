import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import rewardsReducer from './rewards/rewards.reducer';

export default combineReducers({
    rewards: undoable(rewardsReducer, {
        limit: 15
    })
});
