import React from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';

import './modal-message.scss';

export default class ModalMessage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.show) {
            this.setState({show: newProps.show})
        }
    }

    handleHide() {
        this.setState({ show: false });
        if (this.props.switch) {
            this.props.switch();
        }
    }
    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            { this.props.header }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Alert bsStyle={ this.props.type }>
                            { this.props.body }
                        </Alert>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Zamknąć</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
