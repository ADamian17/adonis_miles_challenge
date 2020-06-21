import RewardsActionsType from './rewards.types';

const INITIAL_STATE = {
  currentPosition: {
    x: 0, y: 0
  },
  defaultPosition: {
    x: 140,
    y: 0
  },
};

const rewardsReducer = ( state = INITIAL_STATE, action ) => { 
  switch ( action.type ) {
    case RewardsActionsType.ON_CONTROLLED_DRAG_STOP:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default rewardsReducer;