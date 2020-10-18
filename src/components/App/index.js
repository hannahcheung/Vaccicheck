import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Header from "../Header"

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

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
                </div>
            </Router>
        )
    }
}

export default withAuthentication(App);