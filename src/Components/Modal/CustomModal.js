import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default class CustomModal extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })


    render() {
        const { disabled, busX, busY, busFace } = this.props;
        return (
            <Modal
                trigger={ <Button disabled={ disabled } onClick={ this.handleOpen }>REPORT</Button> }
                open={ this.state.modalOpen }
                onClose={ this.handleClose }
                basic
                size='small'
            >
                <Header icon='info' content='info' />
                <Modal.Content>
                    <h3>{ `The Current Position of the Bus is ( ${busX} , ${busY} , ${busFace} ).` }</h3>
                </Modal.Content>

                <Modal.Actions>
                    <Button color='green' onClick={ this.handleClose } inverted>
                        <Icon name='checkmark' /> Got it
              </Button>
                </Modal.Actions>
            </Modal>

        )
    }
}
