import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from './Home';
import FAQPage from './FAQPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import RecoveryPasswordPage from './RecoveryPasswordPage';

class Router extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">

                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/FAQ" component={FAQPage}></Route>
                        <Route path="/login" component={LoginPage}></Route>
                        <Route path="/register" component={RegisterPage}></Route>
                        <Route path="/recoveryPassword" component={RecoveryPasswordPage}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
