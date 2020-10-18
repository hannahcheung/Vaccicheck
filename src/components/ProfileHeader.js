import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileHeader() {
    const [style, setStyle] = useState(styles.mouseOff)
    const [style2, setStyle2] = useState(styles.mouseOff)
    const [style3, setStyle3] = useState(styles.mouseOff)
    const [style4, setStyle4] = useState(styles.mouseOff)

    return <div id="profileHeader">
        <Link to="/home" style={style}>
            <h3
                onMouseOver={() => setStyle(styles.mouseOn)}
                onMouseOut={() => setStyle(styles.mouseOff)}>
            Home</h3>
        </Link>
        <Link to="/profile" style={style2}>
            <h3
                onMouseOver={() => setStyle2(styles.mouseOn)}
                onMouseOut={() => setStyle2(styles.mouseOff)}
            >Profile</h3>
        </Link>
        <Link to="/map" style={style3}>
            <h3
                onMouseOver={() => setStyle3(styles.mouseOn)}
                onMouseOut={() => setStyle3(styles.mouseOff)}
            >Map</h3>
        </Link>
            <Link to="/vaccineinfo" style={style4}>
                <h3
                    onMouseOver={() => setStyle4(styles.mouseOn)}
                    onMouseOut={() => setStyle4(styles.mouseOff)}
                >Vaccine Records</h3>
            </Link>
        <div style={{paddingRight: "600px"}}></div>
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