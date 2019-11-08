import React, { Component } from 'react';
import { Button, Form,Segment,Grid,Divider,Header,Icon} from 'semantic-ui-react'

export default class SimulatorButtons extends Component {

    handleChange = (e) => {
        this.props.handleChange(e);
    }

    handleSubmit = (e) => {
        this.props.handleSubmit(e);
    }


    render() {

        const { busX, busY } = this.props
        return (
            <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
            <Grid.Column>
                <Form onSubmit={ this.handleSubmit } >
                    <Form.Field control="input" type="text" placeholder="x-value" onChange={ this.handleChange } name='busX' value={ busX } width={ 4 } />
                    <Form.Field control="input" type="text" placeholder="y-value" onChange={ this.handleChange } name='busY' value={ busY } width={ 4 } />
                    <Form.Field control="input" type="text" placeholder="Facing direaction" onChange={ this.handleChange } name='busFace' value={ busY } width={ 6 } />
                    <Form.Field control={ Button } centered="true" primary>place</Form.Field>
                </Form>
            </Grid.Column>
         <Grid.Column >
         <Header icon>
            <Icon name='location arrow'/>Controllers
          </Header>
          <br/>
          <Button.Group>
          <Button >MOVE</Button>
          <Button.Or />
          <Button >LEFT</Button>
          <Button.Or />
          <Button >RIGHT</Button>
          <Button.Or />
          <Button >REPORT</Button>
        </Button.Group>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Segment>
        )
    }
}
