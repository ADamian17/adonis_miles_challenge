import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';

import './TableComponent.scss';

import Rewards from '../Rewards/Rewards';
import { CATEGORIES } from '../../data/data';

const TableComponent = (props) => {
    const { rewards, addCategory, removeCategory, storeCategory, upDateRewardPosition, undo, redo } = props;

    const { present } = rewards; 
    const rewardsList = Object.keys(present)
        .map((reward, index) =>
            <Rewards
                rewards={present}
                rewardTitle={reward}
                cols={present[reward]}
                addCategory={addCategory}
                removeCategory={removeCategory}
                upDateRewardPosition={upDateRewardPosition}
                key={index} />
        );

    const categoriesList = CATEGORIES.map((category, index) => <Table.HeaderCell textAlign="center" key={index}>{category.title}</Table.HeaderCell>);

    return (
        <Table celled structured className="fixed-width">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell textAlign="center" rowSpan="2" width={3}>Rewards</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center" colSpan="5">Categories</Table.HeaderCell>
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
                    <Table.HeaderCell colSpan="5">
                        <Button
                            onClick={storeCategory}
                            floated="right"
                            icon
                            labelPosition="left"
                            primary
                            size="small">
                            
                            <Icon name="save"/>Save
                        </Button>
                        <Button
                            onClick={undo}
                            size="small">Undo</Button>
                        <Button
                            onClick={redo}
                            size="small">
                            Redo
                        </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
};

export default TableComponent;
