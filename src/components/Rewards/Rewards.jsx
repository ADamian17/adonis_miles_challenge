import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Draggable from 'react-draggable';


import './Rewards.scss';

class Rewards extends React.Component {

  render () {
    const { reward, defaultPosition, handleRemove, onControlledDragStop } = this.props;
    return (
      <Table.Row>
        <Table.Cell textAlign='center'>
          <Draggable
            axis="x"
            defaultPosition={defaultPosition}
            onStop={(e, position) => onControlledDragStop(e, position, reward.id)}
          >
            <div className='cardContainer'>
              <div className="cardHeader">
                <Icon className='crossIcon' name='times' onClick={() => handleRemove(reward.id)} />
              </div>
              <div className="cardBody">
              <strong>{reward.title}</strong>
              </div>
            </div>
          </Draggable>
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
    );
  };
};

export default Rewards;