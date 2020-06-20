import React from 'react'

import './TableComponent.scss';

const TableComponent = ({ children }) => {

 return (
  <div className='table-area'>
    <div className='rewards-area'>
      <strong>Rewards</strong>
      <div className='reward-list'>
      {children}
      </div>
    </div>
    <div className='categories-area'>
      <strong>Categories</strong>
      <div className='subheader'>
        <div className="cardTitle1">
          <h4>C1</h4>
        </div>
        <div className="cardTitle2">
        <h4>C2</h4>
        </div>
        <div className="cardTitle3">
        <h4>C3</h4>
        </div>
        <div className="cardTitle4">
        <h4>C4</h4>
        </div>
        <div className="cardTitle5">
        <h4>C5</h4>
        </div>
      </div>
      drag here
    </div>
  </div>
 )
}

export default TableComponent;
