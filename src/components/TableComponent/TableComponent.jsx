import React from 'react'
import { Button, Table, Icon } from 'semantic-ui-react';

import './TableComponent.scss';

import Rewards from '../Rewards/Rewards'

const TableComponent = (props) => {

  const { rewards, categories, defaultPosition, currentPosition, handleSave, handleUndo, handleRemove } = props;
  const rewardsList = rewards.map(
    (reward, index) =>
      <Rewards
        // HandleMap={this.HandleMap} 
        onControlledDragStop={props.onControlledDragStop}
        handleRemove={handleRemove}
        defaultPosition={defaultPosition}
        currentPosition={currentPosition}
        reward={reward}
        key={index} />
  );

  const categoriesList = categories.map((item) => <Table.HeaderCell textAlign='center'>{item.title}</Table.HeaderCell>);

  return (
    <Table celled structured>
      {/* NOTE Table Header */}
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell textAlign='center' rowSpan='2'>Rewards</Table.HeaderCell>
        <Table.HeaderCell textAlign='center' colSpan='5'>Categories</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
        {categoriesList}
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
       {rewardsList}
      </Table.Body>
      {/* Table Footer */}
      <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='5'>
        <Button
        floated='right'
        icon
        labelPosition='left'
        primary
        size='small'
        onClick={ handleSave }   
        >
        <Icon name='save' />save
        </Button>
        <Button size='small'
         onClick={handleUndo}
        >Undo</Button>
        </Table.HeaderCell>
      </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default TableComponent;
