import React, {useState} from "react";
import { Link } from "react-router-dom";


export default function Header() {
    const [style, setStyle] = useState(styles.mouseOff)
    const [style2, setStyle2] = useState(styles.mouseOff)

    return <div className="header">
        <Link to="/" style={{textDecoration: "none", color: "black"}}>
            <h1>VacciCheck</h1>
        </Link>
        {/*<Link to="/home" style={style}>*/}
        {/*    <h3 onMouseOver={() => setStyle(styles.mouseOn)}*/}
        {/*        onMouseOut={() => setStyle(styles.mouseOff)}*/}
        {/*    >Home</h3>*/}
        {/*</Link>*/}
        <Link to="/signup" style={style2}>
            <h3 onMouseOver={() => {
                setStyle2(styles.mouseOn)
            }}
               onMouseOut={() => {
                   setStyle2(styles.mouseOff)
               }}
            >Sign Up</h3>
        </Link>

    </div>
}

const styles={
    mouseOff: {
        textDecoration: "none",
        color: "black",
        textDecorationThickness: "0px"
    },
    mouseOn: {
        textDecoration: "underline",
        color: "black",
        textDecorationColor: "#6B37C1",
        textDecorationThickness: "6px",
    }
}