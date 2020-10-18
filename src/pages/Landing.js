import React from 'react';
import SignIn from "../components/SignIn"
import blob from "../images/HeaderBlob.png"
// const Landing = () => (
//     <div>
//         <h1>Landing</h1>
//     </div>
// );
//
// export default Landing;

export default function Landing() {
    return <div>
        <div id="landingLayoutTop">
            <div id="homeInfo">
                <h2>Why should I get vaccinated?</h2>
                <p>Vaccinations are safe, effective, and can save your life. Sign up here to keep track of your immunization
                    records and where to find the nearest vaccination.</p>
            </div>
            <div id="signIn">
                <h2>Welcome back!</h2>
                <SignIn />
            </div>
        </div>
        <img style={{width: "15%", height: "15%", position: "absolute",
                    right: "0px", top: "180px"}} src={blob} />
     </div>
}