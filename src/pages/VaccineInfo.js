import React, {Component} from 'react';

import { withFirebase } from '../components/Firebase';
import { withAuthorization } from '../components/Session';
import blob from "../images/HeaderBlob.png"
import ProfileHeader from "../components/ProfileHeader.js";

export default function VaccineInfo() {
    return <div>
        <ProfileHeader />
        <img style={{width: "15%", height: "15%", position: "absolute", right: "0px", top: "180px"}} src={blob} />

        <div id="vaccineTable">
            <h2>Vaccination Record</h2>
            <div id="vaccineTableLayout">
                <div className="columnLayout">
                    <p style={{fontWeight: "700"}}>Vaccine Type</p>
                    <p>DTap/DT/Td</p>
                    <p>FLU</p>
                    <p>HEP-A</p>
                    <p>HEP-B</p>
                    <p>HIB</p>
                    <p>MENINGOCOCCAL</p>
                    <p>MMR</p>
                    <p>NOVEL INFLUENZA H1N1-09</p>
                    <p>PNEUMO (PCV)</p>
                    <p>POLIO</p>
                    <p>Tdap</p>
                </div>
                <div className="columnLayout">
                    <p style={{fontWeight: "700"}}>Dose 1</p>
                    <p>Mar. 31, 1990</p>
                    <p>Dec. 25, 1994</p>
                    <p>Feb. 14, 1992</p>
                    <p>Aug. 24, 1990</p>
                    <p>Feb. 28, 1990</p>
                    <p>Feb 19, 1991</p>
                    <p>Aug. 15, 1991</p>
                    <p>Oct. 31, 2009</p>
                    <p>Mar. 27, 1990</p>
                    <p>May 16, 2001</p>
                    <p>Feb. 25, 1991</p>
                </div>
                <div className="columnLayout">
                    <p style={{fontWeight: "700"}}>Dose 2</p>
                    <p>Jun. 13, 1990</p>
                    <p>Jan. 25, 1995</p>
                    <p>Feb. 1, 1993</p>
                    <p>Nov. 31, 1990</p>
                    <p>Jun. 18, 1990</p>
                    <p>Dec 29, 1995</p>
                    <p>Aug. 15, 1991</p>
                    <p>Dec. 16, 2009</p>
                    <p><br/></p>
                    <p>Jul. 26, 2001</p>
                    <p><br/></p>
                </div>
                <div className="columnLayout">
                    <p style={{fontWeight: "700"}}>Dose 3</p>
                    <p>Mar. 31, 1991</p>
                    <p>Oct. 29, 1996</p>
                    <p><br/></p>
                    <p>Nov. 14, 1991</p>
                    <p>Aug. 6, 1990</p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                    <p>May 16, 2001</p>
                    <p><br/></p>
                </div>
                <div className="columnLayout">
                    <p style={{fontWeight: "700"}}>Dose 4</p>
                    <p>Apr. 14, 1991</p>
                    <p>Oct. 29, 1997</p>
                    <p><br/></p>
                    <p><br/></p>
                    <p>May. 3, 1994</p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                    <p>Jan 31, 2002</p>
                    <p><br/></p>
                </div>
                <div className="columnLayout">
                    <p style={{fontWeight: "700"}}>Dose 5</p>
                    <p>Feb. 14, 1992</p>
                    <p style={{color: "#E1A408", fontWeight: "600"}}>Due Soon</p>
                    <p><br/></p>
                    <p><br/></p>
                    <p style={{color: "#D62839", fontWeight: "600"}}>MISSING</p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                    <p><br/></p>
                </div>
            </div>
        </div>
    </div>
}