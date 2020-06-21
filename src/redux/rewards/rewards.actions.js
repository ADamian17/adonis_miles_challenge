import RewardsActionsType from './rewards.types';

export const onControlledDragStop = ( item ) => ({
  type: RewardsActionsType.ON_CONTROLLED_DRAG_STOP,
  payload: item,
})