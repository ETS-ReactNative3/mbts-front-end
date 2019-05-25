import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'


import './login.scss';

// CI
import Loader from '../../components/Loader/Loader';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            loader: false,
            show: false
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({show: newProps.show})
    }

    handleHide() {
        this.props.toggle();
    }
    render() {
        return (
            <div className="modal-container">
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Logowanie
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="login-component">
                            {
                                this.state.loader && <Loader/>
                            }
                            <div className="login-component__header">
                                Zaloguj się przez
                            </div>
                            <div className="login-component__btns">
                                <Button
                                    bsStyle="danger"
                                    onClick={() => this.google()}
                                    className="login-component__btns--one">
                                   <div className="fa fa-google-plus-square" />
                                    Google+
                                </Button>
                                <Button
                                    bsStyle="primary"
                                    onClick={() => this.facebook()}
                                    className="login-component__btns--one">
                                    <div className="fa fa-facebook-square" />
                                    Facebook
                                </Button>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Zamknąć</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    google() {
        window.location.replace('https://mieszkobulik.pl/auth/google');
    }

    facebook() {
        window.location.replace('https://mieszkobulik.pl/auth/facebook');
    }
}

export default withRouter(Login);
