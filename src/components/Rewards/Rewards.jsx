import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Draggable from 'react-draggable';

import './Rewards.scss';

import { CATEGORIES } from '../../data/data';
import { categoryCol } from '../../utils/functs';

class Rewards extends React.Component {

   onControlledDragStop = (e, position) => {
       const { lastX } = position;
       this.props.addCategory(this.props.rewardTitle, categoryCol(lastX));
   };
  
  findCategoryIndex = ( colTitle ) => {
      const index = this.props.rewards[this.props.rewardTitle].findIndex(idx => idx === colTitle);
      this.props.removeCategory(this.props.rewardTitle, index);
  };

  handleUpdatePosition = (e, position) => {
      const { rewards, rewardTitle, cols } = this.props;
      const { lastX } = position;

      const newCol = categoryCol(lastX);
      // const colTitle = cols[0].replace(cols[0], categoryCol(lastX));
      console.log('newCol', newCol);
      console.log('lastX', lastX);
    
  }
  
  render() {
      const { rewardTitle, cols, rewards  } = this.props;
      const position = { x: 106, y: 0 };

      // NOTE this handles cell
      const categoriesCol = CATEGORIES.map((col, index) =>
          <Table.Cell key={index} width={2}>
              {
                  cols.includes(col.title) ? (
                      <Draggable
                          axis="x"
                          onStop={this.handleUpdatePosition}
                          defaultPosition={{x: 60, y: 0}}>
                          <div className="cardContainer">
                              <div className="cardHeader">
                                  <Icon
                                      className="crossIcon"
                                      name="times"
                                      onClick={() => this.findCategoryIndex(col.title)}/>
                              </div>
                              <div className="cardBody">
                                  <strong>{rewardTitle}</strong>
                              </div>
                          </div>
                      </Draggable>
                  ) : null
              }
          </Table.Cell>
      );

      return (
          <Table.Row>
              <Table.Cell textAlign="center">
                  <Draggable
                      axis="x"
                      disabled={rewards[rewardTitle].length > 0 ? true : false}
                      position={position}
                      onStop={this.onControlledDragStop}>
                      <div className="cardContainer">
                          <div className="cardHeader" />
                          <div className="cardBody">
                              <strong>{rewardTitle}</strong>
                          </div>
                      </div>
                  </Draggable>
                  
              </Table.Cell>

              {categoriesCol}
          </Table.Row>
      );
  }
}

export default Rewards;
