import RewardsActionsType from './rewards.types';

const INITIAL_STATE = {
    R1: [],
    R2: [],
    R3: [],
    R4: [],
    R5: []
};

const rewardsReducer = (state = INITIAL_STATE, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case RewardsActionsType.ADD_CATEGORY:
            state[action.payload.reward].push(action.payload.category);
            return {
                ...state
            };
        case RewardsActionsType.REMOVE_CATEGORY:
            state[action.payload.reward].splice(action.payload.index, 1);
            return {
                ...state
            };
        case RewardsActionsType.STORE_CATEGORY:
            localStorage.setItem('rewardsMap', JSON.stringify({ ...state }));
            return {
                ...state
            };
        case RewardsActionsType.UPDATE_REWARD_POSITION:
            state[action.payload.reward].pop();
            state[action.payload.reward].push(action.payload.category);
            return {
                ...state
            };
        default:
            return state;
    }
};

export default rewardsReducer;
