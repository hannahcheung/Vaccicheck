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
                <h2 style={{marginBottom: "0px"}}>Why should I get vaccinated?</h2>
                <p style={{marginTop: "10px"}}>Vaccinations are safe, effective, and can save your life. Sign up here to keep track of your immunization
                    records and where to find the nearest vaccination.</p>
            </div>
            <div id="signIn">
                <h2 style={{marginBottom: "20px"}}>Welcome back!</h2>
                <SignIn />
            </div>
        </div>
        <img style={{width: "15%", height: "15%", position: "absolute", right: "0px", top: "170px", zIndex: "1"}}
             src={blob} />

        {/*<div className="spacer" />*/}
        <div id="landingMission">
            <h2 style={{marginBottom: "0px"}}>Mission</h2>
            <p style={{marginTop: "10px", paddingBottom: "40px"}}>
                VacciCheck is here to provide anyone the means of locating places to get
                vaccinated and to keep track of your immunization record. For medical emergencies, please dial 911.</p>
        </div>
     </div>
}