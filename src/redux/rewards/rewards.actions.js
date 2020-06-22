import RewardsActionsType from './rewards.types';

export const addCategory = ( reward, category ) => ({
    type: RewardsActionsType.ADD_CATEGORY,
    payload: {
        reward,
        category
    }
});

export const removeCategory = ( reward ) => ({
    type: RewardsActionsType.REMOVE_CATEGORY,
    payload: {
        reward
    }
}); 
