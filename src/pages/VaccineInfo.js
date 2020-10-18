import React, {Component} from 'react';

import { withFirebase } from '../components/Firebase';
import { withAuthorization } from '../components/Session';
import blob from "../images/HeaderBlob.png"
import ProfileHeader from "../components/ProfileHeader.js";

export default function VaccineInfo() {
    return <div>
        <ProfileHeader />
        <img style={{width: "15%", height: "15%", position: "absolute",
                    right: "0px", top: "180px"}} src={blob} />
    </div>
}