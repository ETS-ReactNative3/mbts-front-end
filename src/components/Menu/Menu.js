import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon, NavDropdown } from 'react-bootstrap';

import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom'
import './Menu.scss';

import api from '../../api/api';
import Login from '../../pages/login/login';

// let testUser = {
//     facebookId: "2234163909927394",
//     rights:"mieszko",
//     username: "Mieszko Bulik",
//     __v: 0,
//     _id: "5af4b0ac2a506c5b7e6c40ff"
// }

class Menu extends React.Component {

    state = {
        user: false,
        show: false,
        pathname: '/',
        toggle: false
    };

    url = window.location.pathname;

    componentWillMount() {
        this.getUser();
    }

    componentDidMount() {
       let main =  document.getElementsByClassName('main-box')[0];
       main.addEventListener('click', (e) => {
            if (e.target.className === 'hash') {
                document.getElementById('drop').click()
            } else {
                if (["icon-bar", 'dropdown-toggle'].includes(e.target.className)) return;
                this.state.toggle  ? this.toggleMenu() : null;
            }
        });
    }

    toggleMenu() {
       document.getElementsByClassName('navbar-toggle')[0].click()
    }

    async getUser() {
        let result = await api.getUser();
        if (result && result.rights) {
            this.setState({user: result, pathname: this.props.location.pathname});
        } else {
            this.setState({user: false, pathname: this.props.location.pathname});
        }
    }


    render() {
        let { pathname = '' } = this.props.location;
        return (
            <div>
                <div className="menu-wrapper">
                    <Navbar collapseOnSelect onToggle={e => {
                        this.setState({toggle: e});
                    }} fixedTop={true}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a onClick={() => this.goTo("/")} className="logo">
                                    <div className="logo-div">
                                        <div>Training</div>
                                        <div className="system">System</div>
                                        <div className="by">By Mieszko Bulik</div>
                                    </div>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>


                            <Nav pullRight>
                                <NavDropdown eventKey={3} title="Home" id="drop" className={`${pathname === '/ui' ||  pathname === '/'? 'active' : ''}`}>
                                    <Link className="hash" to="/#about">
                                        O mnie
                                    </Link>
                                    <Link className="hash" to="/#program">
                                        Program
                                    </Link>
                                    <Link className="hash" to="/#order">
                                        Zamów
                                    </Link>
                                    <Link className="hash" to="/#contact">
                                        Contact
                                    </Link>


                                </NavDropdown>
                                {
                                    this.state.user && this.state.user.rights === 'mieszko' &&
                                    <NavItem eventKey={0} className={`${pathname.includes('/users')  ? 'active' : ''}`} onClick={() => this.goTo("/users")}>
                                        Users
                                    </NavItem>
                                }
                                <NavItem eventKey={1} className={`${pathname.includes('/my-blog')  ? 'active' : ''}`} onClick={() => this.goTo("/my-blog")}>
                                        Dekerta Daily
                                </NavItem>
                                <NavItem
                                    eventKey={2}
                                    className={`${pathname.includes('/dekerta-blog') ? 'active' : ''}`}
                                    onClick={() => this.goTo("/dekerta-blog")}>
                                        Dekerta Athlete Program
                                </NavItem>
                                <NavItem eventKey={3} className={`${pathname.includes('/articles')  ? 'active' : ''}`} onClick={() => this.goTo("/articles")}>
                                        Articles
                                </NavItem>
                                <NavItem eventKey={4}
                                         className={`${pathname.includes('/info') ? 'active' : ''} sepor`}
                                         onClick={() => this.goTo("/info")}>
                                        Info
                                </NavItem>
                                {
                                    this.state.user && <NavItem onClick={() => this.goTo("/profile", this.state.user)}>
                                        <div className="hash divider">
                                            <Glyphicon glyph="user" />  { this.state.user.username || 'User' }
                                        </div>
                                    </NavItem>
                                }
                                {
                                    !this.state.user ?
                                        <NavItem eventKey={2} href="#">
                                            <div className="hash" onClick={() => this.toggleShowLogin()}>
                                                <Glyphicon glyph="log-in" /> Login
                                            </div>
                                        </NavItem> :
                                        <NavItem className="hash" eventKey={2} onClick={() => this.logout()}>
                                            <Glyphicon glyph="log-out" /> Logout
                                        </NavItem>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Login show={this.state.show} toggle={() => this.toggleShowLogin()}/>
            </div>
        );
    }

    toggleShowLogin() {
        this.setState({show: !this.state.show})
    }

    goTo(url, user) {
      if (user) {
        this.props.history.push(url + `/${user._id}`);
        this.setState({pathname: this.props.location.pathname});
      } else {
        this.props.history.push(url);
        this.setState({pathname: this.props.location.pathname});
      }
    }

    goToHash(hash) {
        this.props.history.push({hash, pathname: '/'});
        // window.location.replace('https://mieszkobulik.pl/ui' + '#' + hash);
        // window.location.hash = hash;
    }

    logout() {
        window.location.replace('https://mieszkobulik.pl/auth/logout');
        this.getUser();
    }
}

export default withRouter(Menu);
