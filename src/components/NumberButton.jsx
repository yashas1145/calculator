import React from "react";

function NumberButton (props) {
    return <button onClick={() => {
        props.onClick(props.number);
    }}>
        {props.number}
    </button>
}

export default NumberButton;