import RewardsActionsType from './rewards.types';

const INITIAL_STATE = {
  R1: ['C1', 'C2'],
  R2: ['C3', 'C4']
};

const rewardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RewardsActionsType.ON_CONTROLLED_DRAG_STOP:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default rewardsReducer;
