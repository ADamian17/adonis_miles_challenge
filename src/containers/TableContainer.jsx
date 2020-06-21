import { connect } from 'react-redux';

import TableComponent from '../components/TableComponent/TableComponent';


const mapStateToProps = state => ({
    rewards: state.rewards
})

const TableComponentContainer = connect(mapStateToProps)(TableComponent);

export default TableComponentContainer;



