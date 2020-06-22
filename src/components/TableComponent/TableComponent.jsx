import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';

import './TableComponent.scss';

import Rewards from '../Rewards/Rewards';
import { CATEGORIES } from '../../data/data';

const TableComponent = (props) => {

    const { rewards, addCategory, removeCategory, storeCategory } = props;
    const rewardsHeader = Object.keys(props.rewards).map((reward, index) => <Rewards rewards={rewards} rewardTitle={reward} cols={rewards[reward]} addCategory={addCategory} removeCategory={removeCategory} key={index} />);

    const categoriesList = CATEGORIES.map((category, index) => <Table.HeaderCell textAlign="center" key={index}>{category.title}</Table.HeaderCell>);

    return (
        <Table celled structured>
            {/* NOTE Table Header */}
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
                {rewardsHeader}
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
                              
                            <Icon name="save"/>save
                        </Button>
                        <Button size="small">Undo</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
};

export default TableComponent;
