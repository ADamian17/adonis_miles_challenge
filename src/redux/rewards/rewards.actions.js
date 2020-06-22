import RewardsActionsType from './rewards.types';

export const addCategory = (category, reward) => ({
  type: RewardsActionsType.ADD_CATEGORY,
  payload: {
    category,
    reward
  },
});
