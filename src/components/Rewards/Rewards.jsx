import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Draggable from 'react-draggable';


import './Rewards.scss';

import { CATEGORIES } from '../../data/data';
import { getCategoryForPos } from '../../utils/functs';

class Rewards extends React.Component {

   onControlledDragStop = (e, position) => {
       const { lastX } = position;
       this.props.addCategory(this.props.rewardTitle, getCategoryForPos(lastX));
   };
  
  findCategoryIndex = ( colTitle ) => {
      const index = this.props.rewards[this.props.rewardTitle].findIndex(idx => idx === colTitle);
      this.props.removeCategory(this.props.rewardTitle, index);
  };
  
  
  render() {
      const { rewardTitle, cols, rewards  } = this.props;
      const position = { x: 16, y: 0 };

      const categoriesCol = CATEGORIES.map((col, index) =>
          <Table.Cell key={index} width={2}>
              {
                  cols.includes(col.title) ? (
                      <Draggable
                          className="dragable-main-container"
                          axis="x"
                          disabled={rewards[rewardTitle].length > 0 ? true : false}
                          defaultPosition={{x: 8, y: 0}}>
                          <div className="cardContainer">
                              <div className="cardHeader">
                                  <Icon
                                      className="crossIcon"
                                      name="times"
                                      onClick={() => this.findCategoryIndex(col.title)}/>
                              </div>
                              <div className="cardBody">
                                  <strong className="card-reward-title">{rewardTitle}</strong>
                              </div>
                          </div>
                      </Draggable>
                  ) : null
              }
          </Table.Cell>
      );

      return (
          <Table.Row>
              <Table.Cell textAlign="center" width={2}>
                  <Draggable
                      axis="x"
                      className="dragable-main-container"
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
