import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Draggable from 'react-draggable';

import './Rewards.scss';

import { CATEGORIES } from '../../data/data';
import { categoryCol } from '../../utils/functs';

class Rewards extends React.Component {

   onControlledDragStop = (e, position) => {
       const { lastX } = position;
       this.props.addCategory(this.props.reward, categoryCol(lastX));
   };
  
   render() {
       console.log(this.props);
       const { reward, cols } = this.props;
       const position = { x: 106, y: 0 };

       // NOTE this handles cell
       const categoriesCol = CATEGORIES.map((col, index) =>
           <Table.Cell key={index} width={2}>
               {
                   cols.includes(col.title) ? (
                       <Draggable
                           axis="x"
                           defaultPosition={{x: 60, y: 0}}>
                           <div className="cardContainer">
                               <div className="cardHeader">
                                   <Icon
                                       className="crossIcon"
                                       name="times" />
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

               <Table.Cell textAlign="center">
                   <Draggable
                       axis="x"
                       position={position}
                       onStop={this.onControlledDragStop }>
                       <div className="cardContainer">
                           <div className="cardHeader" />
                           <div className="cardBody">
                               <strong>{reward}</strong>
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
