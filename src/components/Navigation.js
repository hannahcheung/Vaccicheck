import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut.js';
import * as ROUTES from '../constants/routes';
import { AuthUserContext } from './Session';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <SignOutButton />
);

const NavigationNonAuth = () => (
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
);

export default Navigation;