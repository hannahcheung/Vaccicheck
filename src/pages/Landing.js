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

export default function Landing(props) {
    return <div>
        <div id="landingLayoutTop">
            <div id="homeInfo">
                <h2 style={{marginBottom: "0px"}}>Why should I get vaccinated?</h2>
                <p style={{marginTop: "10px"}}>Vaccinations are safe, effective, and can save your life. Sign up here to keep track of your immunization
                    records and where to find the nearest vaccination.</p>
            </div>
            <div id="signIn">
                <h2 style={{marginBottom: "20px"}}>Welcome back!</h2>
                <SignIn setUser={props.setUser} />
            </div>
        </div>
        <img style={{width: "15%", height: "15%", position: "absolute", right: "0px", top: "170px", zIndex: "1"}}
             src={blob} />

        {/*<div className="spacer" />*/}
        <div id="landingMission">
            <h2 style={{marginBottom: "0px"}}>Mission</h2>
            <p style={{marginTop: "10px", paddingBottom: "40px"}}>
                Vaccicheck aims to assist communities with developing healthcare systems as a
                end-to-end vaccine management tool!
            </p>

            <p style={{marginTop: "10px", paddingBottom: "40px"}}>
                Enabling residents with a private yet usable portal, it becomes possible to safely keep track of immunization
                records AND register for where/when to administer their next vaccinations. Vaccicheck also make it easy for
                clinics across regions to digitize and stay connected for smarter, more efficient vaccine deployment.
            </p>

            <p style={{marginTop: "10px", paddingBottom: "40px", color: "red"}}>
                For medical emergencies, please dial 911.
            </p>
        </div>
     </div>
}