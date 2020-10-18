import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const [textDecoration, setTextDecoration] = useState("none")
    const [color, setColor] = useState("black")
    const [textDecoration2, setTextDecoration2] = useState("none")
    const [color2, setColor2] = useState("black")
    const [textDecoration3, setTextDecoration3] = useState("none")
    const [color3, setColor3] = useState("black")

    return <div style={{padding: "120px 0 75px"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Link to="/about" style={{margin: "0 20px 30px", textDecoration: textDecoration, textDecorationColor: color, color: "black"}}>
                <p onMouseOver={() => {
                    setTextDecoration("underline")
                    setColor("#6B37C1")
                }}
                   onMouseOut={() => {
                       setTextDecoration("none")
                       setColor("black")

                   }}
                >About</p>
            </Link>
            <Link to="/contact" style={{margin: "0 20px 30px", textDecoration: textDecoration2, textDecorationColor: color2, color: "black"}}>
                <p onMouseOver={() => {
                    setTextDecoration2("underline")
                    setColor2("#6B37C1")
                }}
                   onMouseOut={() => {
                       setTextDecoration2("none")
                       setColor2("black")

                   }}
                >Contact</p>
            </Link>
            <Link to="/privacy" style={{margin: "0 20px 30px", textDecoration: textDecoration3, textDecorationColor: color3, color: "black"}}>
                <p onMouseOver={() => {
                    setTextDecoration3("underline")
                    setColor3("#6B37C1")
                }}
                   onMouseOut={() => {
                       setTextDecoration3("none")
                       setColor3("black")

                   }}
                >Privacy</p>
            </Link>

        </div>
        {/*<div style={{display: "flex", justifyContent: "center"}}>*/}
        {/*    <p style={{color: "rgb(102, 102, 102)", fontWeight: "500", fontSize: "13px"}}> © 2020 Kenny Le Design</p>*/}
        {/*</div>*/}
    </div>
}