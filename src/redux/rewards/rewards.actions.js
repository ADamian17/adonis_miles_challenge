import RewardsActionsType from './rewards.types';

export const addCategory = ( reward, category ) => ({
    type: RewardsActionsType.ADD_CATEGORY,
    payload: {
        reward,
        category
    }
});

export const removeCategory = ( reward, index ) => ({
    type: RewardsActionsType.REMOVE_CATEGORY,
    payload: {
        reward,
        index
    }
});

export const storeCategory = () => ({
    type: RewardsActionsType.STORE_CATEGORY
});
