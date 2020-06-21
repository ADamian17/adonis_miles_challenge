import { combineReducers } from 'redux';

import rewardsReducer from './rewards/rewards.reducer';

export default combineReducers({
  rewards: rewardsReducer
})