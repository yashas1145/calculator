import React from "react";

const equalBtnStyle = {
    "background-color": "green",
    "color": "whitesmoke",
}

function SignButton (props) {
    return <button style={props.sign === "=" ? equalBtnStyle : null} onClick={() => {
        props.onClick(props.sign)
    }}>
        {props.sign}
    </button>
}

export default SignButton;