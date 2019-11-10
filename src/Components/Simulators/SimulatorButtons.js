import React, { Component } from 'react';
import {
    Button,
    Form,
    Segment,
    Grid,
    Divider,
    Header,
    Icon,
    Dropdown,
    Message,
    Menu
} from 'semantic-ui-react';

import CustomModal from '../Modal/CustomModal';

export default class SimulatorButtons extends Component {

    handleInputChange = (e) => {
        this.props.handleInputChange(e);
    }

    handleSubmit = (e) => {
        this.props.handleSubmit(e);
    }

    handleBusMove = () => {
        this.props.handleBusMove()
    }
    handleBusTurn = (turn) => {
        this.props.handleBusTurn(turn);
    }

    disableMoveBtn = () => {
        const { busX, busY, busFace } = this.props;
        if (busY === 4 && busFace === 'NORTH') return true;
        if (busY === 0 && busFace === 'SOUTH') return true;
        if (busX === 4 && busFace === 'EAST') return true;
        if (busX === 0 && busFace === 'WEST') return true;
    }

    renderDropDwnOptions = () => {
        const faces = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
        return faces.map((item, i) => {
            return {
                key: i,
                text: item,
                value: item
            }
        })

    }

    handleDropDwn = (e, { value }) => {
        this.props.handleDropDwn(value);
    }

    handleReport = () => {
        this.props.handleReport();
    }

    handleError = () => {
        if (this.props.error) {
            return (
                <Message negative width={ 4 }>
                    <p>Invalid co-ordinates please revise the values</p>
                </Message>
            )
        }
    }

    render() {

        const { busX, busY, isPlaced } = this.props;
        //error condition for disabling the controllers
        const { error } = this.props;
        //field validations
        let errorX = busX > 4 || busX < 0 ? { content: 'Invalid value', pointing: 'below' } : false;
        let errorY = busY > 4 || busY < 0 ? { content: 'Invalid value', pointing: 'below' } : false;

        return (
            <Segment placeholder as={ Menu } fixed="top">
                <Grid columns={ 2 } stackable textAlign='center'>
                    <Divider vertical>Or</Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            { this.handleError() }
                            <Form onSubmit={ this.handleSubmit } >
                                <Form.Field
                                    control="input"
                                    type="number"
                                    placeholder="x-value"
                                    onChange={ this.handleInputChange }
                                    name='busX' width={ 4 } autoComplete="off"
                                    error={ errorX || error } required />

                                <Form.Field
                                    control="input"
                                    type="number"
                                    placeholder="y-value"
                                    onChange={ this.handleInputChange }
                                    name='busY' width={ 4 } autoComplete="off"
                                    error={ errorY || error } required />

                                <Dropdown selection search name='busFace' width={ 4 }
                                    onChange={ this.handleDropDwn }
                                    placeholder="Facing direction"
                                    options={ this.renderDropDwnOptions() }
                                    style={ { marginBottom: '25px' } }
                                    required />

                                <Form.Field control={ Button } centered="true" primary disabled={ error }  >PLACE</Form.Field>
                            </Form>
                        </Grid.Column>

                        <Grid.Column >
                            <Header icon>
                                <Icon name='location arrow' />Controllers
                            </Header>
                            <br />
                            <Button.Group>
                                <Button onClick={ this.handleBusMove } disabled={ this.disableMoveBtn() || !isPlaced }>MOVE</Button>
                                <Button.Or />
                                <Button disabled={ error || !isPlaced } onClick={ () => this.handleBusTurn('LEFT') } >LEFT</Button>
                                <Button.Or />
                                <Button disabled={ error || !isPlaced } onClick={ () => this.handleBusTurn('RIGHT') } >RIGHT</Button>
                                <Button.Or />
                                <CustomModal disabled={ error || !isPlaced } onClick={ this.handleReport }{ ...this.props }>REPORT</CustomModal>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}
