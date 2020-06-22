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

    // // NOTE this is not working 
    // handleRemove = (id) => {
    //     const { selectedReward } = this.state;
    //     const defaultX = this.state.defaultPosition.x;
    //     const selectedRewardX = selectedReward.x;
    //     const reward = this.state.rewards[id];

    //     if (selectedRewardX !== defaultX && selectedReward.id === id) {
    //         this.setState({
    //             selectedReward: {
    //                 ...reward,
    //                 x: 0,
    //                 y: 0
    //             }
    //             // rewardsMap: rewardsMap.splice(selectedReward.id, 1)
    //         });
    //         console.log('id:', id);
    //         console.log('selectedReward:', selectedReward);
    //         console.log(selectedRewardX);
    //         console.log(this.state.currentPosition);
    //         return;
    //     }
    // };

    // // NOTE this is not working 
    // handleUndo = () => {
    //     const { rewardsMap } = this.state;
    //     const localStorageLength = localStorage.length;

    //     if (localStorageLength > 0 && rewardsMap.length > 0) {
    //         localStorage.removeItem('rewardsMap');
    //         this.setState({
    //             rewardsMap: []
    //         });
    //     }
    //     console.log(rewardsMap);
    //     console.log('localStorageLength:', localStorageLength);
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

