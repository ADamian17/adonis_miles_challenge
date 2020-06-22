import { connect } from 'react-redux';
import { addCategory } from '../redux/rewards/rewards.actions';

import TableComponent from '../components/TableComponent/TableComponent';


const mapStateToProps = state => ({
    rewards: state.rewards
});

// this given the com[ponent a way to disoatch an action
const mapDispatchToProps = dispatch => ({
    // this is my action in my reducer
    addCategory: (reward, category) => dispatch(addCategory(reward, category))
});

const TableComponentContainer = connect(mapStateToProps, mapDispatchToProps)(TableComponent);

export default TableComponentContainer;
