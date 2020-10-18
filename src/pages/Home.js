import React, {Component} from 'react';

import { withFirebase } from '../components/Firebase';
import { withAuthorization } from '../components/Session';
import blob from "../images/HeaderBlob.png"
import child from "../images/Child.png"
import stand from "../images/Standing.png";
import general from "../images/GeneralGuy.png"
import ProfileHeader from "../components/ProfileHeader.js";

const condition = authUser => !!authUser;

export default withAuthorization(condition)(function Home() {
    return <div>
        <ProfileHeader />
        <div id="upcomingVac">
            <h2>Upcoming Vaccinations</h2>
            <div id="vaccineLayout">
                <p>Influenza Vaccine</p>
                <p>DUE by 10/23/2020</p>
            </div>
            <h2>Recent Vaccinations</h2>
            <div id="vaccineLayout">
                <p>HPV Vaccine</p>
                <p>RECEIVED on 10/18/2020</p>
            </div>
        </div>
        <img style={{width: "15%", height: "15%", position: "absolute",
                    right: "0px", top: "180px"}} src={blob} />
        <div id="resourcesTab">
            <h2>Resources</h2>
            <p>Recommended Vaccination Sequences:</p>
                <a href="https://www.cdc.gov/vaccines/parents/resources/childhood.html">
                    <img src={child}/>
                </a>
                <a href="https://www.cdc.gov/vaccines/parents/resources/teen.html">
                    <img src={stand}/>
                </a>
                <a href="https://www.cdc.gov/vaccines/parents/resources/index.html">
                    <img src={general}/>
                </a>
        </div>
    </div>
})