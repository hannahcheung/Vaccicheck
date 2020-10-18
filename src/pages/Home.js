import React, {Component} from 'react';

import { withFirebase } from '../components/Firebase';
import { withAuthorization } from '../components/Session';
import blob from "../images/HeaderBlob.png"
import child from "../images/Child.png"
import stand from "../images/Standing.png";
import general from "../images/GeneralGuy.png"
import ProfileHeader from "../components/ProfileHeader.js";

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
        <ProfileHeader />
        <div id="upcomingVac">
            <h2>Upcoming Vaccinations</h2>
            <div className="vaccineLayout">
                <div className="vaccineRow">
                    <p>Influenza Vaccine</p>
                    <p style={{paddingLeft: "40px"}}>DUE by 10/23/2020</p>
                </div>
            </div>
            <h2 style={{paddingBottom: "0px"}}>Recent Vaccinations</h2>
            <div className="vaccineLayout">
                <div className="vaccineRow">
                    <p>HPV Vaccine</p>
                    <p style={{paddingLeft: "40px"}}>Received on 10/18/2020</p>
                </div>
                <div className="vaccineRow">
                    <p>DTap Vaccine</p>
                    <p style={{paddingLeft: "40px"}}>Received on 08/16/2019</p>
                </div>
            </div>

        </div>
        <img style={{width: "15%", height: "15%", position: "absolute",
                    right: "0px", top: "180px"}} src={blob} />
        <div id="resourcesTab">
            <h2>Resources</h2>
            <p>Recommended Vaccination Sequences:</p>
            <div id="resourcesIconLayout">
                <div className="resourcesIconText">
                    <a href={links.childSeries}>
                        <img src={child}/>
                    </a>
                    <a href={links.childSeries}>
                        Childhood
                    </a>
                </div>
                <div className="resourcesIconText">
                    <a href={links.teenSeries}>
                        <img src={stand}/>
                    </a>
                    <a href={links.teenSeries}>
                        Young Adults
                    </a>
                </div>
                <div className="resourcesIconText">
                    <a href={links.adultSeries}>
                        <img src={general}/>
                    </a>
                    <a href={links.adultSeries}>
                        Adults
                    </a>
                </div>
            </div>
        </div>
    </div>
}

const links={
    childSeries: "https://www.cdc.gov/vaccines/parents/resources/childhood.html",
    teenSeries: "https://www.cdc.gov/vaccines/parents/resources/teen.html",
    adultSeries: "https://www.cdc.gov/vaccines/parents/resources/index.html"
}