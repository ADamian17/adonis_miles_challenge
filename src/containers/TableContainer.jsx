import { connect } from 'react-redux';
import { addCategory, removeCategory, storeCategory, upDateRewardPosition } from '../redux/rewards/rewards.actions';
import { ActionCreators } from 'redux-undo';

import TableComponent from '../components/TableComponent/TableComponent';

const mapStateToProps = state => ({
    rewards: state.rewards
});

// this given the com[ponent a way to disoatch an action
const mapDispatchToProps = dispatch => ({
    // this is my action in my reducer
    addCategory: (category, reward) => dispatch(addCategory(category, reward)),
    removeCategory: (reward, index) => dispatch(removeCategory(reward, index)),
    storeCategory: () => dispatch(storeCategory()),
    upDateRewardPosition: (category, reward) => dispatch(upDateRewardPosition(category, reward)),
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo())
});

const TableComponentContainer = connect(mapStateToProps, mapDispatchToProps)(TableComponent);

export default TableComponentContainer;
