import React from 'react';
import { Button, Grid, Table, Header, Icon } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';

import './App.scss';


import Rewards from './components/Rewards/Rewards';
import MainContainer from './components/MainContainer/MainContainer';
import { REWARDS, CATEGORIES } from './data/data';
import { categoryCol } from './utils/functs'

class App extends React.Component {
  state = {
    rewardsCount: 0,
    currentPosition: {
      x: 0, y: 0
    },
    defultPosition: {
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
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    const error = toast.error('There is nothing to save', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
    const { rewardsMap } = this.state
    const localStorageLength = localStorage.length;
    console.log('localStorageLength:', localStorageLength)
    console.log('rewardsMapLength:', rewardsMap.length )
    
    if ( localStorageLength !== 0 && rewardsMap.length !== 0) {
      localStorage.setItem('rewardsMap', JSON.stringify({ ...rewardsMap }));
      return success
    } else { 
      return error;
    }
  };
  
  // NOTE this is not working 
  handleUndo = () => {
    this.setState({
      rewardsMap: [],
      defultPosition: {
        x: 140,
        y: 0
      }
    });
    console.log(this.state.rewardsMap)
  };

  // NOTE this is not working 
  handleRemove = (id) => {
    const { defultPosition, rewards } = this.state
    const selectedReward = rewards[id]
    if (selectedReward.position !== defultPosition) {
      this.setState({
        position: defultPosition
      })
      console.log(selectedReward)
    };
  };

  render () {
    const { rewards, categories, defultPosition } = this.state;
   
    const rewardsList = rewards.map(
      (reward, index) =>
        <Rewards
          HandleMap={this.HandleMap} 
          onControlledDragStop={this.onControlledDragStop}
          handleRemove={this.handleRemove}
          defaultPosition={ defultPosition}
          reward={reward}
          key={index} />
    );

    const categoriesList = categories.map((item) => <Table.HeaderCell textAlign='center'>{item.title}</Table.HeaderCell>)
    
    return (
      <MainContainer>
         <Header>Miles Front-end Challenge</Header>
      </MainContainer>
    //   <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

    //     {/* NOTE Notification */}
    //     <ToastContainer
    //       position="top-center"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       />

    //   <Grid.Column style={{ width: '90%' }}>
    //     <Header>Miles Front-end Challenge</Header>
    //     {/* Table start*/}
    //     <Table celled structured>
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell textAlign='center' rowSpan='2'>Rewards</Table.HeaderCell>
    //         <Table.HeaderCell textAlign='center' colSpan='5'>Categories</Table.HeaderCell>
    //       </Table.Row>
          
    //       <Table.Row>
    //       {categoriesList}
    //       </Table.Row>
          
    //     </Table.Header>

    //       <Table.Body>
    //         {rewardsList}
    //       </Table.Body>
    //       <Table.Footer fullWidth>
    //         <Table.Row>
    //           <Table.HeaderCell />
    //           <Table.HeaderCell colSpan='5'>
    //             <Button
    //               floated='right'
    //               icon
    //               labelPosition='left'
    //               primary
    //               size='small'
    //               onClick={this.handleSave}  
    //             >
    //               <Icon name='save' /> save
    //             </Button>
    //               <Button size='small' onClick={this.handleUndo}>Undo</Button>
    //           </Table.HeaderCell>
    //         </Table.Row>
    //       </Table.Footer>
    //     </Table>
    //   </Grid.Column>
    // </Grid>
   );
 }
}

export default App;
