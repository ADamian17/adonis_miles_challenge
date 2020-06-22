import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Draggable from 'react-draggable';

import './Rewards.scss';

import { CATEGORIES } from '../../data/data'

class Rewards extends React.Component {

  // handleRewards = () => {
  //   for (let reward in this.props.rewards) {
  //     for (let idx of reward) {
  //       console.log(idx)
  //     }
  //   };
  // };

  render() {
    console.log(this.props)
    const { reward, cols, addCategory } = this.props
    const position = { x: 140, y: 0 }

    // NOTE this handles cell
    const categoriesCol = CATEGORIES.map(col =>
      <Table.Cell >
        {
          cols.includes(col.title) ? (
            <Draggable
              axis="x"
              position={position}
            >
              <div className='cardContainer'>
                <div className="cardHeader">
                  <Icon
                    className='crossIcon'
                    name='times'
                  />
                </div>
                <div className="cardBody">
                  <strong>{reward}</strong>
                </div>
              </div>
            </Draggable>
          ) : null
        }
      </Table.Cell>
    );

    return (
      <Table.Row>

        <Table.Cell textAlign='center'>
          <Draggable
            axis="x"
            position={position}
            onStop={() => addCategory("C5", reward)}
          >
            <div className='cardContainer'>
              <div className="cardHeader">
                <Icon
                  className='crossIcon'
                  name='times'
                />
              </div>
              <div className="cardBody">
                <strong>{reward}</strong>
              </div>
            </div>
          </Draggable>
        </Table.Cell>

        {categoriesCol}
      </Table.Row>
    );
  };
};

export default Rewards;
