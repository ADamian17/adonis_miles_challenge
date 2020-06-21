import React from 'react'
import { Button, Table, Icon } from 'semantic-ui-react';

import './TableComponent.scss';

import Rewards from '../Rewards/Rewards'
import { CATEGORIES } from '../../data/data';

const TableComponent = (props) => {
  const { rewards, handleSave, handleUndo, onStart, defaultPosition, currentPosition } = props;

  const rewardsList = rewards.map(
    (reward) =>
      <Rewards
        // HandleMap={this.HandleMap}
        key={reward.id}
        reward={reward}
        onStart={onStart}
        defaultPosition={defaultPosition}
        currentPosition={currentPosition}
        onControlledDragStop={props.onControlledDragStop}
      />
  );

  const categoriesList = CATEGORIES.map((category, index) => <Table.HeaderCell textAlign='center' key={index}>{category.title}</Table.HeaderCell>);

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
              onClick={handleSave}
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
