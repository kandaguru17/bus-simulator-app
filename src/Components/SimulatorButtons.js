import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Divider, Header, Icon, Dropdown } from 'semantic-ui-react'

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
        return faces.map((item,i)=>{
            return {
                key:i,
                text:item,
                value:item
           }
        })

    }

    handleDropDwn=(e,{value})=>{
    this.props.handleDropDwn(value);
    }


    render() {

        const { busX, busY, isPlaced,busFace } = this.props;
        
        //error condition for disabling the controllers
        const error =  ((busX > 4 || busX < 0) || (busY > 4 || busY < 0));
       //field validations
        let errorX =busX > 4 || busX < 0 ? { content: 'Out of bound',pointing:'below' } : false;
        let errorY = busY > 4 || busY < 0 ? { content: 'Out of bound',pointing:'below' } : false;
        
        return (
            <Segment placeholder>
                <Grid columns={ 2 } stackable textAlign='center'>
                    <Divider vertical>Or</Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Form onSubmit={ this.handleSubmit } >

                                <Form.Field control="input" type="number" placeholder="x-value" onChange={ this.handleInputChange } name='busX' width={ 4 } autoComplete="off" error={ errorX } required/>

                                <Form.Field control="input" type="number" placeholder="y-value" onChange={ this.handleInputChange } name='busY' width={ 4 } autoComplete="off" error={ errorY } required/>

                                {/* <Form.Field control="input" type="text" placeholder="Facing direction" onChange={ this.handleChange } name='busFace' width={ 4 } autoComplete="off" required/> */}

                                <Dropdown search name='busFace' width={ 3 }  onChange={ this.handleDropDwn } placeholder="Facing direction" options={this.renderDropDwnOptions()} style={{marginBottom:'25px'}}
                                />

                                <Form.Field control={ Button } centered="true" primary disabled={ error }  >place</Form.Field>

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
                                <Button disabled={ error || !isPlaced }>REPORT</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}
