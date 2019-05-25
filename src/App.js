import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CI
import Menu from './components/Menu/Menu';
import DetailView from './pages/blog/detail-view/detail-view';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Users from './pages/users/Users';
import Footer from './components/Footer/Footer';
import Login from "./pages/login/login";
import Faq from "./pages/faq/Faq";
import Profile from "./pages/profile/Profile";

// main styles
import './styles/main.scss';

export default class App extends React.Component {

    render() {
        return (
            <div className="main-box">
                <Router basename="/ui">
                    <div>
                        <Route path="/" component={Menu}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/profile/:id" component={Profile} />

                        {/*ruotes for blog*/}
                        <Route exact path="/my-blog" render={ (routeProps) =>
                            <Blog blogType={'my-blog'}/>
                        }/>
                        <Route exact path="/dekerta-blog" render={ (routeProps) =>
                            <Blog blogType={'dekerta-blog'}/>
                        }/>
                        <Route exact path="/articles" render={ (routeProps) =>
                            <Blog blogType={'articles'}/>
                        }/>
                        <Route exact path="/my-blog/:params" render={ (routeProps) =>
                            <DetailView blogType={'my-blog'}/>
                        }/>
                        <Route exact path="/dekerta-blog/:params" render={ (routeProps) =>
                            <DetailView blogType={'dekerta-blog'}/>
                        }/>
                        <Route exact path="/articles/:params" render={ (routeProps) =>
                            <DetailView blogType={'articles'}/>
                        }/>
                        <Route exact path="/users" component={Users}/>
                        <Route exact path="/info" component={Faq}/>
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}
