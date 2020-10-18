import React from "react";
import Navigation from "../components/Navigation/index.js"
import blob from "../images/HeaderBlob.png"

export default function Header() {
    return <div className="header">
        <h1>VacciCheck</h1>
        <Navigation />
    </div>
}