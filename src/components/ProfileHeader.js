import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileHeader() {
    const [color, setColor] = useState("black")

    return <div id="profileHeader">
        <Link to="/home" style={{textDecoration: "none", color: color}}>
            <h3 
                onMouseOver={() => setColor("purple")}
                onMouseOut={() => setColor("black")}>
                    Home</h3>
            </Link>
            <Link to="/profile" style={{textDecoration: "none", color: "black"}}>
            <h3>Profile</h3></Link>
            <Link to="/map" style={{textDecoration: "none", color: "black"}}>
            <h3>Map</h3></Link>
            <Link to="/vaccineinfo" style={{textDecoration: "none", color: "black"}}>
            <h3>Vaccine Records</h3></Link>      
    </div>
}