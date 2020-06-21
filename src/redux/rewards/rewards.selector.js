import { createSelector } from 'reselect';

const selectCurrentPosition = (state) => state.currentPosition;

// export const currentPosition = createSelector(selectCurrentPosition, (user) => user.currentUser);