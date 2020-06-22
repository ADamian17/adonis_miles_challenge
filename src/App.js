import React from 'react';
import { Header } from 'semantic-ui-react';
import { toast } from 'react-toastify';
// import { connect } from 'react-redux';

import MainContainer from './components/MainContainer/MainContainer';
import TableComponent from './components/TableComponent/TableComponent';
import { categoryCol } from './utils/functs';
import TableContainer from './containers/TableContainer';

class App extends React.Component {
    // remove this later 
    state = {
        currentPosition: {
            x: 0, y: 0
        },
        defaultPosition: {
            x: 140,
            y: 0
        },
        rewardsMap: [],
        selectedReward: {}
    };

    // NOTE ################################# Actions #######################################
    onStart = (id) => {
        const { currentPosition } = this.state;
        const reward = this.state.rewards[id];
        this.setState({
            selectedReward: {
                ...reward,
                ...currentPosition
            }
        });
    };

    onStop = (id, position) => {
        const reward = this.state.rewards[id];
        this.setState({
            selectedReward: {
                ...reward,
                ...position,
                ...categoryCol(position.x)
            }
        });
        console.log(this.state.selectedReward);
    }

    onControlledDrag = (e, position) => {
        const { x } = position;
        this.setState({
            currentPosition: { x, y: 0 }
        });
    };

    onControlledDragStop = (e, position, id) => {
        e.stopPropagation();
        this.onControlledDrag(e, position);
        this.onStop(id, this.state.currentPosition);
        this.HandleMap();
    };

    HandleMap = () => {
        const { rewardsMap, selectedReward } = this.state;

        if (selectedReward && selectedReward.x < 875 && selectedReward.x > 199) {
            rewardsMap.push(selectedReward);
        }

        console.log(this.state.rewardsMap);
    };

    // NOTE ###################################################################################

    handleSave = () => {
        const success = toast.success('You have save you rewards!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        const error = toast.error('There is nothing to save', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        const { rewardsMap } = this.state;
        const localStorageLength = localStorage.length;

        if (localStorageLength === 0 && rewardsMap.length > 0) {
            localStorage.setItem('rewardsMap', JSON.stringify({ ...rewardsMap }));
            return success;
        }
        console.log('localStorageLength:', localStorageLength);
        console.log('rewardsMapLength:', rewardsMap.length);
        return error;
    };

    // NOTE this is not working 
    handleRemove = (id) => {
        const { selectedReward } = this.state;
        const defaultX = this.state.defaultPosition.x;
        const selectedRewardX = selectedReward.x;
        const reward = this.state.rewards[id];

        if (selectedRewardX !== defaultX && selectedReward.id === id) {
            this.setState({
                selectedReward: {
                    ...reward,
                    x: 0,
                    y: 0
                }
                // rewardsMap: rewardsMap.splice(selectedReward.id, 1)
            });
            console.log('id:', id);
            console.log('selectedReward:', selectedReward);
            console.log(selectedRewardX);
            console.log(this.state.currentPosition);
            return;
        }
    };

    // NOTE this is not working 
    handleUndo = () => {
        const { rewardsMap } = this.state;
        const localStorageLength = localStorage.length;

        if (localStorageLength > 0 && rewardsMap.length > 0) {
            localStorage.removeItem('rewardsMap');
            this.setState({
                rewardsMap: []
            });
        }
        console.log(rewardsMap);
        console.log('localStorageLength:', localStorageLength);
    };

    render() {
        const { rewards, defaultPosition, currentPosition } = this.state;

        return (
            <MainContainer>
                <Header>Miles Front-end Challenge</Header>
                <TableContainer />
            </MainContainer>
        );
    }
}

export default App;

