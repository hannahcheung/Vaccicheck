import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './SignUp.js';
import { PasswordForgetLink } from './PasswordForget.js';
import { withFirebase } from './Firebase';
import * as ROUTES from '../constants/routes';

const SignInPage = (props) => (
    <div>
        {/*<h1>SignIn</h1>*/}
        <div id="signInBox">
            <SignInForm setUser={props.setUser} />
            {/*<PasswordForgetLink />*/}
            <SignUpLink />
        </div>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.setUser(authUser);
                this.props.history.push(ROUTES.PATIENT);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onSubmitKey = e => {
        if (e.key === 'Enter')
            this.onSubmit(e);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div id="signInFields" onKeyDown={this.onSubmitKey}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <div className="spacer" />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <div className="spacer" />
                <div id="signInLastLine">
                    <PasswordForgetLink />
                    <Link to="/home">
                        <button id="loginButton" disabled={isInvalid} type="submit" onClick={this.onSubmit}>
                            Login
                        </button>
                    </Link>
                </div>

                {error && <p style={{fontSize: "20px"}}>{error.message}</p>}
            </div>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };