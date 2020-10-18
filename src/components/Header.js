import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.js"
// import SignUp from "../components/SignUp"

export default function Header() {
    const [color, setColor] = useState("black")

    return <div className="header">
        <Link to="/" style={{textDecoration: "none", color: "black"}}>
            <h1>VacciCheck</h1>
        </Link>
        <Link to="/home" style={{textDecoration: "none", color: color}}>
            <h3>Home</h3>
        </Link>
        <Link to="/signup" style={{textDecoration: "none", color: color}}>
            <h3
                onMouseOver={() => setColor("red")}
                onMouseOut={() => setColor("black")}
            >Sign Up</h3>
        </Link>

    </div>
}