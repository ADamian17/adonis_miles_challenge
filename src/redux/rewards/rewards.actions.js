import RewardsActionsType from './rewards.types';
import { toast } from 'react-toastify';

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
    type: RewardsActionsType.STORE_CATEGORY,
    sucess: toast.dark('Success!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    })
});


export const upDateRewardPosition = (reward, category ) => ({
    type: RewardsActionsType.UPDATE_REWARD_POSITION,
    payload: {
        reward,
        category
    }
});

