import React from 'react';
import { Header } from 'semantic-ui-react';
// import { toast } from 'react-toastify';

import MainContainer from './components/MainContainer/MainContainer';
import TableContainer from './containers/TableContainer';

class App extends React.Component {

    // handleSave = () => {
    //     const success = toast.success('You have save you rewards!', {
    //         position: 'top-right',
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true
    //     });

    //     const error = toast.error('There is nothing to save', {
    //         position: 'top-right',
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true
    //     });

    //     const { rewardsMap } = this.state;
    //     const localStorageLength = localStorage.length;

    //     if (localStorageLength === 0 && rewardsMap.length > 0) {
    //         localStorage.setItem('rewardsMap', JSON.stringify({ ...rewardsMap }));
    //         return success;
    //     }
    //     console.log('localStorageLength:', localStorageLength);
    //     console.log('rewardsMapLength:', rewardsMap.length);
    //     return error;
    // };

    render() {
        return (
            <MainContainer>
                <Header>Miles Front-end Challenge</Header>
                <TableContainer />
            </MainContainer>
        );
    }
}

export default App;

