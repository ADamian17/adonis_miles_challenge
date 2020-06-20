import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Grid } from 'semantic-ui-react';

import './MainContainer.scss';

const MainContainer = ({ children }) => {
  return (
    <Grid className='mainContainer' textAlign='center' verticalAlign='middle'>
      {/* NOTE Notification */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Grid.Column className='mainCol' style={{ width: '90%' }}>
        { children }  
      </Grid.Column>
    </Grid> 


  );
};

export default MainContainer;