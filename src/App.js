import React from 'react';
import { Header } from 'semantic-ui-react';

import MainContainer from './components/MainContainer/MainContainer';
import TableContainer from './containers/TableContainer';

const App = () => {
    return (
        <MainContainer>
            <Header>Miles Front-End Challenge</Header>
            <TableContainer />
        </MainContainer>
    );
    
};

export default App;

