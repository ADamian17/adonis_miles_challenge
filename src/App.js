import React from 'react';
import { Header } from 'semantic-ui-react';
import { toast } from 'react-toastify';

import MainContainer from './components/MainContainer/MainContainer';
import TableComponent from './components/TableComponent/TableComponent';
import { REWARDS, CATEGORIES } from './data/data';
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
    categories: CATEGORIES,
    rewardsMap: []
  };

  // NOTE ################################# Actions #######################################

  onControlledDrag = (e, position ) => {
    const {x, y} = position;
    this.setState({
      currentPosition: {x, y}
    });
  };

  onControlledDragStop = (e, position, id ) => {
    this.onControlledDrag(e, position);
    this.HandleMap(id)
  };

  HandleMap = (id) => {
    const { rewards, currentPosition, rewardsMap } = this.state
    const { x } = currentPosition;
    
    if (rewards[id] && x > 295 ) { 
      rewardsMap.push({ ...categoryCol( x ),...rewards[id], ...currentPosition})
    }
    console.log(this.state.rewardsMap)
  }

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
    console.log('rewardsMapLength:', rewardsMap.length )
    
    if ( localStorageLength === 0 && rewardsMap.length > 0) {
      localStorage.setItem('rewardsMap', JSON.stringify({ ...rewardsMap }));
      return success
    } else { 
      return error;
    }
  };
  
  // NOTE this is not working 
  handleUndo = () => {
    const { currentPosition, defaultPosition } = this.state;
    if (currentPosition !== defaultPosition) { 
      this.setState({
        rewardsMap: [],
        defultPosition: {
          x: 140,
          y: 0
        }
      });
    }
    console.log(this.state.rewardsMap)
  };

  // NOTE this is not working 
  handleRemove = (id) => {
    const { defaultPosition, rewards } = this.state
    const selectedReward = rewards[id]
    if (selectedReward.position !== defaultPosition) {
      this.setState({
        position: defaultPosition
      })
      console.log(selectedReward)
    };
  };

  render () {
    const { rewards, categories, defaultPosition } = this.state;

    return (
      <MainContainer>
        <Header>Miles Front-end Challenge</Header>

        <TableComponent
          categories={categories}
          rewards={rewards}
          handleSave={this.handleSave}
          handleUndo={this.handleUndo}
          handleRemove={this.handleRemove}
          defaultPosition={defaultPosition}
          onControlledDragStop={this.onControlledDragStop}
        />
      </MainContainer>
   );
 }
}

export default App;
