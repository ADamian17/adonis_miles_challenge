import { connect } from 'react-redux';
import { addCategory, removeCategory, storeCategory } from '../redux/rewards/rewards.actions';

import TableComponent from '../components/TableComponent/TableComponent';


const mapStateToProps = state => ({
    rewards: state.rewards
});

// this given the com[ponent a way to disoatch an action
const mapDispatchToProps = dispatch => ({
    // this is my action in my reducer
    addCategory: (category, reward) => dispatch(addCategory(category, reward)),
    removeCategory: (reward, index) => dispatch(removeCategory(reward, index)),
    storeCategory: () => dispatch( storeCategory() )  
});

const TableComponentContainer = connect(mapStateToProps, mapDispatchToProps)(TableComponent);

export default TableComponentContainer;
