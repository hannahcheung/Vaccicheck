import React, {Component} from 'react';

import { withFirebase } from '../components/Firebase';
import { withAuthorization } from '../components/Session';

// class HomePage extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Home Page</h1>
//                 <p>The Home Page is accessible by every signed in user.</p>
//             </div>
//         )
//     }
// }
//
// const condition = authUser => !!authUser;
//
// export default withFirebase(withAuthorization(condition)(HomePage));

export default function Home() {
    return <div>
        <p>home page</p>
    </div>
}