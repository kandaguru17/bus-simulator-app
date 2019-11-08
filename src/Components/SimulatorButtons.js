import React, { Component } from 'react';
import { Button, Form, Segment, Grid, Divider, Header, Icon } from 'semantic-ui-react'

export default class SimulatorButtons extends Component {

    handleChange = (e) => {
        this.props.handleChange(e);
    }

    handleSubmit = (e) => {
        this.props.handleSubmit(e);
    }

    handleBusMove = () => {
        this.props.handleBusMove()
    }

    render() {

        const { busX, busY,busFace } = this.props;
        let error=busX > 4 || busY >4; 
        console.log(error);
        return (
            <Segment placeholder>
                <Grid columns={ 2 } stackable textAlign='center'>
                    <Divider vertical>Or</Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Form onSubmit={ this.handleSubmit } >
                                <Form.Field control="input" type="text" placeholder="x-value" onChange={ this.handleChange } name='busX' value={ busX } width={ 4 } error={busX > 4} />
                                <Form.Field control="input" type="text" placeholder="y-value" onChange={ this.handleChange } name='busY' value={ busY } width={ 4 } error={busY > 4} />
                                <Form.Field  control="input" type="text" placeholder="Facing direction" onChange={ this.handleChange } name='busFace' value={ busFace } width={ 6 } />
                                <Form.Field control={ Button } centered="true" primary>place</Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column >
                            <Header icon>
                                <Icon name='location arrow' />Controllers
                            </Header>
                            <br />
                            <Button.Group>
                                <Button onClick={ this.handleBusMove } disabled={error}>MOVE</Button>
                                <Button.Or />
                                <Button  disabled={error}>LEFT</Button>
                                <Button.Or />
                                <Button disabled={error} >RIGHT</Button>
                                <Button.Or />
                                <Button disabled={error}>REPORT</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}
