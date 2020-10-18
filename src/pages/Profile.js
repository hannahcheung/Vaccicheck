import React, {Component} from 'react';

import { withFirebase } from '../components/Firebase';
import { withAuthorization } from '../components/Session';
import blob from "../images/HeaderBlob.png"
import ProfileHeader from "../components/ProfileHeader.js";

export default function Profile() {
    return <div>
        <ProfileHeader />
        <img style={{width: "15%", height: "15%", position: "absolute",
                    right: "0px", top: "180px"}} src={blob} />
        <div id="profileLayout">
            <h2>Account Information</h2>
            <div id="vaccineLayout">
                <p>Name:</p>
                <p>Johnson Smith</p>
            </div>
            <div id="vaccineLayout">
                <p>Prounouns:</p>
                <p>He/him</p>
            </div>
            <div id="vaccineLayout">
                <p>Date of Birth:</p>
                <p>6/20/1990</p>
            </div>
            <div id="vaccineLayout">
                <p>Email:</p>
                <p>johnson@gmail.com</p>
            </div>
            <div id="vaccineLayout">
                <p>Phone Number:</p>
                <p>555-555-5555</p>
            </div>
            <div id="vaccineLayout">
                <p>Address:</p>
                <p>6739 Gamma St.</p>
            </div>
        </div>
    </div>
}