import React from 'react';
import { Header } from 'semantic-ui-react';
import { toast } from 'react-toastify';

import MainContainer from './components/MainContainer/MainContainer';
import TableComponent from './components/TableComponent/TableComponent';
import { REWARDS, } from './data/data';
import { categoryCol } from './utils/functs'

class App extends React.Component {

    state = {
        currentPosition: {
            x: 0, y: 0
        },
        defaultPosition: {
            x: 140,
            y: 0
        },
        rewards: REWARDS,
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
                ...position
            }
        });
        console.log(this.state.selectedReward)
    }

    onControlledDrag = (e, position) => {
        const { x } = position;
        this.setState({
            currentPosition: { x, y: 0 }
        });
    };

    onControlledDragStop = (e, position, id) => {
        e.stopPropagation()
        this.onControlledDrag(e, position);
        this.onStop(id, this.state.currentPosition);
        this.HandleMap()
    };

    HandleMap = () => {
        const { rewardsMap, selectedReward, currentPosition } = this.state
        console.log(selectedReward);
        const mapedReward = { ...categoryCol(currentPosition), ...selectedReward, }
        if (selectedReward) {
            rewardsMap.push(mapedReward);
        };

        console.log(this.state.rewardsMap);
    };

    // NOTE ###################################################################################

    handleSave = () => {
        const success = toast.success('You have save you rewards!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        const error = toast.error('There is nothing to save', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        const { rewardsMap } = this.state
        const localStorageLength = localStorage.length;
        console.log('localStorageLength:', localStorageLength)
        console.log('rewardsMapLength:', rewardsMap.length)

        if (localStorageLength === 0 && rewardsMap.length > 0) {
            localStorage.setItem('rewardsMap', JSON.stringify({ ...rewardsMap }));
            return success
        } else {
            return error;
        }
    };

    // NOTE this is not working 
    handleUndo = () => {
        const { rewardsMap } = this.state
        const localStorageLength = localStorage.length;

        if (localStorageLength > 0 && rewardsMap.length > 0) {
            localStorage.removeItem('rewardsMap')
            this.setState({
                rewardsMap: []
            });
            console.log(rewardsMap);
        };

    };

    // NOTE this is not working 
    handleRemove = (id) => {
        const { defaultPosition, rewards, rewardsMap } = this.state
        const selectedReward = rewards[id]

        if (selectedReward.position !== defaultPosition) {
            selectedReward.position = defaultPosition;
            console.log(selectedReward.id)
            return;
        };

        this.setState({
            rewardsMap: rewardsMap.splice(selectedReward.id, 1)
        });
        console.log(rewardsMap);
    };

    render() {
        const { rewards, defaultPosition, currentPosition } = this.state;

        return (
            <MainContainer>
                <Header>Miles Front-end Challenge</Header>

                <TableComponent
                    rewards={rewards}
                    onStart={this.onStart}
                    handleSave={this.handleSave}
                    handleUndo={this.handleUndo}
                    defaultPosition={defaultPosition}
                    currentPosition={currentPosition}
                    onControlledDragStop={this.onControlledDragStop}
                />
            </MainContainer>
        );
    }
}

export default App;


// handleRemove={this.handleRemove}

