import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import LandingPage from './pages/Landing.js';
import SignUpPage from './components/SignUp.js';
import SignInPage from './components/SignIn.js';
import PasswordForgetPage from './components/PasswordForget.js';
import HomePage from './pages/Home.js';
import AccountPage from './components/Account.js';
import AdminPage from './components/Admin.js';
import Header from "./components/Header";
import ProfilePage from './pages/Profile.js';
import MapPage from './pages/Map.js';
import VaccinePage from "./pages/VaccineInfo.js";

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = { user: null }
    }

    setUser = (user) => {
        this.setState({user: user})
    }
    
    render = () => {
        return (
            <Router>
                <div>
                    <Header />

                    {/*<hr />*/}

                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route path={ROUTES.SIGN_IN} render={(props) => (<SignInPage {...props} setUser={this.setUser} />)} />
                    <Route
                        path={ROUTES.PASSWORD_FORGET}
                        component={PasswordForgetPage}
                    />
                    <Route path={ROUTES.PATIENT} render={(props) => (<HomePage {...props} user={this.state.user} />)} />
                    <Route path={ROUTES.CLINIC} component={HomePage} />
                    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Route path={ROUTES.ADMIN} component={AdminPage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/map" component={MapPage} />
                    <Route path="/vaccineinfo" component={VaccinePage} />
                </div>
            </Router>
        )
    }
}

export default withAuthentication(App);