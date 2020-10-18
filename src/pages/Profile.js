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
            <h2 style={{marginBottom: "20px", paddingTop: "50px"}}>Account Information</h2>
            <div style={{paddingLeft: "40px"}}>
                <div className="rowLayout">
                    <p style={{fontWeight: "700"}}>Name:</p>
                    <p style={{paddingLeft: "40px"}}>Johnson Smith</p>
                </div>
                <div className="rowLayout">
                    <p style={{fontWeight: "700"}}>Prounouns:</p>
                    <p style={{paddingLeft: "40px"}}>He/him</p>
                </div>
                <div className="rowLayout">
                    <p style={{fontWeight: "700"}}>Date of Birth:</p>
                    <p style={{paddingLeft: "40px"}}>6/20/1990</p>
                </div>
                <div className="rowLayout">
                    <p style={{fontWeight: "700"}}>Email:</p>
                    <p style={{paddingLeft: "40px"}}>johnson@gmail.com</p>
                </div>
                <div className="rowLayout">
                    <p style={{fontWeight: "700"}}>Phone Number:</p>
                    <p style={{paddingLeft: "40px"}}>555-555-5555</p>
                </div>
                <div className="rowLayout">
                    <p style={{fontWeight: "700"}}>Address:</p>
                    <p style={{paddingLeft: "40px"}}>6739 Gamma St.</p>
                </div>
            </div>
        </div>
    </div>
}