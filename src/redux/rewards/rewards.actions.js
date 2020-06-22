import RewardsActionsType from './rewards.types';

export const addCategory = ( reward, category ) => ({
    type: RewardsActionsType.ADD_CATEGORY,
    payload: {
        category,
        reward
    }
});
