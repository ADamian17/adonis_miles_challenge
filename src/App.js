import React from 'react';
import { Header } from 'semantic-ui-react';

import MainWrapper from './components/MainWrapper/MainWrapper';
import TableContainer from './containers/TableContainer';

const App = () => {
    return (
        <MainWrapper>
            <Header>Miles Front-End Challenge</Header>
            <TableContainer />
        </MainWrapper>
    );
    
};

export default App;

