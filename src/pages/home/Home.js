import React from 'react';
import { Button, Row, Col, Grid, Image, FormControl, Glyphicon, FormGroup, ControlLabel } from 'react-bootstrap';
import { RingLoader } from 'react-spinners';



import './Home.scss';

import Underline from '../../components/Underline/Underline';
import ModalMessage from '../../components/Modal-messages/modal-message';
import api from '../../api/api';

export default class Home extends React.Component {

    state = {
        name: {value: '', touched: false, blured: false, valid: false},
        mail: {value: '', touched: false, blured: false, valid: false},
        msg: {value: '', touched: false, blured: false, valid: false},
        phone: {value: '', touched: false, blured: false, valid: false},
        loader: false,
        model: {
            type: 'info',
            header: '',
            body: '',
            show: false,
        }
    };

    spinner = {
        shape: "triangleUp",
        animation: "pulse",
        time: "2s",
        duration: 'infinite',
        opacity: '0.3',
        bgColor: '#27556c',
        elColor: '#2d1557'
    };


    render() {

        return (
            <div className="homepage" ref='home'>
                 {/*Welcome */}
                <div className="homepage__welcome main-block" >
                    <div className="homepage__welcome-block">
                        <div>Mieszko Bulik</div>
                        <div>Training System</div>
                        <div>
                            <Button bsStyle="warning" bsSize="large" onClick={(e) => this.goToHash('contact')}>Zamów</Button>
                        </div>
                    </div>
                </div>

                {/*Info about me*/}
                <div className="homepage__info main-block"  id="about">
                    <Underline text={'O mnie'} />

                    <div className="last-info">
                        <div className="text-block fs-3">
                            <div>Mieszko Bulik</div>
                            <div>Trener CrossFit,</div>
                            <div>Trener Personalny,</div>
                            <div>zawodnik CrossFit kategorii Elite.</div>
                        </div>
                        <div className="text-block fs-4">
                            <div>Zwycięzca zawodów Under the Bridge,</div>
                            <div>finalista największych zawodów CrossFitowych w Polsce:</div>
                            <div>Medieval Games, Amarok East Side Challenge, Battle of Poland,</div>
                            <div>oraz wielu innych prestiżowych imprez.</div>
                        </div>
                        <div className="text-block fs-4">
                            <div>Zwycięzca Pucharu Polski w kolarstwie szosowym,</div>
                            <div>zawodnik zajmujący wysokie miejsca w prestiżowych rankingach,</div>
                            <div>zawodowy sportowiec, uczestnik Mistrzostw Świata.</div>
                        </div>
                        <div className="text-block fs-4">
                            <div>Absolwent AWF Katowice, Fitness Manager.</div>
                        </div>
                        <div className="text-block fs-4">
                            <div>Trener CrossFit lvl 1, instruktor ćwiczeń siłowych.</div>
                        </div>
                        <div className="text-block fs-4">
                            <div>Trener podwójnego Mistrza Polski w jeździe indywidualnej na czas,</div>
                            <div>Trener brązowej medalistki Mistrzostw Polski w tenisie ziemnym do lat 23,</div>
                            <div>oraz wielu wspaniałych zawodników.</div>
                        </div>
                    </div>
                </div>

                {/* Achivements */}
                <div className="homepage__achivements">
                    <div className="text-block achive">
                        <h1 className="fs-2">6</h1>
                        <div className="fs-6">Lat <br/> doświadczenia</div>
                    </div>
                    <div className="text-block achive">
                        <h1 className="fs-2">100+</h1>
                        <div className="fs-6">Transformacji <br/> klientów</div>
                    </div>
                    <div className="text-block achive">
                        <h1 className="fs-2">500+</h1>
                        <div className="fs-6">Treningów <br/> personalnych</div>
                    </div>
                </div>

                {/* Programs */}
                <div className="homepage__programs main-block" id="program">
                    <Underline text={'Oferta dla Ciebie'} />
                    <div className="text-block fs-4 my-program">
                        <div>
                            Program treningowy, który oferuje wykonuje ponad <strong>100</strong> osób dziennie. Każdy zyskał znaczący progres.
                        </div>
                        <div>
                            Dołącz do grona spełniających się zawodników.
                        </div>
                    </div>
                    <Grid>
                        <Row>
                            <Col xs={6} md={4} className="text-block">
                                <Image src="/assets/pictures/programs/2.jpg" circle className="text-block" />
                                <div className="comment text-block fs-4">
                                    Trening Crossfit
                                </div>
                            </Col>
                            <Col xs={6} md={4} className="text-block">
                                <Image src="/assets/pictures/programs/4.jpg" circle className="text-block" />
                                <div className="comment text-block fs-4">Budowanie siły</div>
                            </Col>
                            <Col xs={6} md={4} className="text-block">
                                <Image src="/assets/pictures/programs/5.jpg" circle className="text-block" />
                                <div className="comment text-block fs-4">Przygotowanie motoryczne</div>
                            </Col>
                            <Col xs={6} md={4} className="text-block">
                                <Image src="/assets/pictures/programs/6.jpg" circle className="text-block"/>
                                <div className="comment text-block fs-4">Przygotowanie do zawodów</div>
                            </Col>
                            <Col xs={6} md={4} className="text-block">
                                <Image src="/assets/pictures/programs/3.jpg" circle className="text-block"/>
                                <div className="comment text-block fs-4">
                                    Spalanie tkanki tłuszczowej
                                </div>
                            </Col>
                            <Col xs={6} md={4} className="text-block">
                                <Image src="/assets/pictures/programs/1.jpg" circle className="text-block"/>
                                <div className="comment text-block fs-4">
                                    Budowanie masy mięśniowej
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                {/* Order */}
                <div className="homepage__order main-block" id="order">
                    <Underline text={'Zamów trening'} />
                    <div className="contain">
                        <div className="image">
                            <Image circle src="/assets/pictures/cross-hand.jpg" rounded />
                        </div>
                        <div className="info fs-4">
                            <div className="text-block fs-4">
                                Wiem czego potrzebujesz, aby dostać się z miejsca, w którym jesteś, do miejsca, w którym chcesz być.
                            </div>
                            <div className="text-block fs-4">
                                Zamów indywidualny plan treningowy, lub umów się na trening personalny.
                            </div>
                            <Button bsStyle="warning" onClick={(e) => this.goToHash('contact')}>
                                <Glyphicon glyph="fire" className="fs-4" /> &nbsp;
                                <span className="fs-4">
                                    Plany już od 59zł!
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="homepage__contact main-block" id="contact">
                    <ModalMessage type={this.state.model.type}
                                  header={this.state.model.header}
                                  body={this.state.model.body}
                                  show={this.state.model.show}
                                  switch={() => {this.notificationOf()}}/>
                    <form action="" className="form" onSubmit={(e) => {this.sendMail(e, true)}}>
                        <Underline text={'Skontaktuj się i zamów trening'} reversed={true} />
                        <FormGroup validationState={this.getValidationState('name')}>
                            <FormControl
                                id="formControlsText"
                                type="text"
                                placeholder="Imię"
                                onBlur={() => this.blury('name')}
                                value={this.state.name.value}
                                onChange={(e) => this.setStateFromInput('name', e.target.value)}
                            />
                            <FormControl.Feedback />
                            <ControlLabel>Pole 'Imię' jest wymagane, co najmniej 3 znaki</ControlLabel>
                        </FormGroup>
                        <FormGroup validationState={this.getValidationState('mail')}>
                            <FormControl
                                id="formControlsText"
                                type="mail"
                                onBlur={() => this.blury('mail')}
                                placeholder="E-mail"
                                value={this.state.mail.value}
                                onChange={(e) => this.setStateFromInput('mail', e.target.value)}
                            />
                            <FormControl.Feedback />
                            <ControlLabel>Pole 'mail' jest wymagane, format: user@gmail.com</ControlLabel>
                        </FormGroup>
                        <FormGroup validationState={this.getValidationState('phone')}>
                            <FormControl
                                id="formControlsText"
                                type="phone"
                                placeholder="Telefon"
                                value={this.state.phone.value}
                                onBlur={() => this.blury('phone')}
                                onChange={(e) => this.setStateFromInput('phone', e.target.value)}
                            />
                            <FormControl.Feedback />
                            <ControlLabel>Pole 'Telefon' jest wymagane, format: 999888777</ControlLabel>
                        </FormGroup>
                        <FormGroup validationState={this.getValidationState('msg')}>
                            <FormControl
                                componentClass="textarea"
                                placeholder="Wiadomość"
                                rows="4"
                                onBlur={() => this.blury('msg')}
                                value={this.state.msg.value}
                                onChange={(e) => this.setStateFromInput('msg', e.target.value)}
                            />
                            <FormControl.Feedback />
                            <ControlLabel>Pole 'Wiadomość' jest wymagane, co najmniej 3 znaki</ControlLabel>
                        </FormGroup>
                        <Button bsStyle="warning" type="submit"> <span className="fs-4">Wyślij</span></Button>
                        <div className={`spinner ${this.state.loader ? 'active': ''}`}>
                            <RingLoader
                                color={'#123abc'}
                                loading={true}
                            />
                        </div>
                    </form>

                </div>
            </div>
        );
    }

    blury(type) {
        this.setState({[type]: Object.assign({}, this.state[type], {blured: true})});
    }

    notificationOf() {
        this.setState({model: Object.assign({}, this.state.model, {show: !this.state.model.show})});
    }

    getValidationState(type) {

        const value = this.state[type].value;
        const touched = this.state[type].touched;
        const blured = this.state[type].blured;

        if (touched && blured) {

            switch(type) {
                case 'phone':
                    let isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{3})$/.test(value);
                    if (isphone)
                    return  this.validy(isphone, type);

                case 'mail':
                    var ismail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
                    return  this.validy(ismail, type);

                case 'name':
                    var isName = value.length > 2;
                    return  this.validy(isName, type);

                default:
                    var isMsg = value.length > 3;
                    return  this.validy(isMsg, type);

            }
        }

        return null;
    }

    setStateFromInput(type, value) {
        this.setState({[type]: {value, touched: true, blured: this.state[type].blured}});
    }

    validy(valid, type) {
        this[type] = valid;
        return valid ? 'success' : 'error';
    }

    goToHash(hash) {
        window.location.hash = '';
        window.location.hash = hash;
    }


    async sendMail(e, byButton) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({loader: true});

        if (byButton) {
            if (this.name && this.mail && this.phone && this.msg) {
                let {name, phone, mail, msg} = this.state;
                let dto = {name: name.value, phone: phone.value, mail: mail.value, msg: msg.value};
                let result = await api.sentOrder(dto);
                if (result === 'good') {
                    this.setState({
                        model: {type: 'success', header: 'Notification!', body: "You message successfully sent!", show: true },
                        name: {value: '', touched: false, blured: false, valid: false},
                        mail: {value: '', touched: false, blured: false, valid: false},
                        msg: {value: '', touched: false, blured: false, valid: false},
                        phone: {value: '', touched: false, blured: false, valid: false},
                        loader: false
                    });
                    this.name = false;
                    this.msg = false;
                    this.mail = false;
                    this.phone = false;
                } else {
                    this.setState({
                        model: {type: 'danger', header: 'Zawiadomienie', body: "Something went wrong, Please try later!", show: true },
                        loader: false
                    })
                }
            } else {
                this.setState({
                    model: {type: 'warning', header: 'Zawiadomienie', body: 'Wypełnij poprawnie formularz', show: true },
                    loader: false
                })
            }
        }
    }
}
