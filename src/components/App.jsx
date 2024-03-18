import React, { useState } from "react";
import NumberButton from "./NumberButton";
import SignButton from "./SignButton";
import Display from "./Display";
import SignDisplay from "./SignDisplay";

const titleStyle = {
    "text-align": "center"
}

function App () {
    const [input, setInput] = useState("");
    const [sign, setSign] = useState("");

    function handleSignClick(sign) {
        if (sign === "C") {
            setInput("");
            setSign("");
        } else {
            setSign(sign);
        }
    }
    
    function handleNumberClick (number) {
        var updatedInput = input + number;
        setInput(updatedInput);
    }

    return <div>
        <h1 style={titleStyle}>Simple calculator</h1>
        <div className="main-display">
            <div className="display">
                {input}
                <div className="sign-display">
                    {sign}
                </div>
            </div>
        </div>
        <div className="grid-number">
            <NumberButton number="9" onClick={handleNumberClick}></NumberButton>
            <NumberButton number="8" onClick={handleNumberClick}></NumberButton>
            <NumberButton number="7" onClick={handleNumberClick}></NumberButton>
            <SignButton sign="+" onClick={handleSignClick}></SignButton>
            <NumberButton number="6" onClick={handleNumberClick}></NumberButton>
            <NumberButton number="5" onClick={handleNumberClick}></NumberButton>
            <NumberButton number="4" onClick={handleNumberClick}></NumberButton>
            <SignButton sign="-" onClick={handleSignClick}></SignButton>
            <NumberButton number="3" onClick={handleNumberClick}></NumberButton>
            <NumberButton number="2" onClick={handleNumberClick}></NumberButton>
            <NumberButton number="1" onClick={handleNumberClick}></NumberButton>
            <SignButton sign="*" onClick={handleSignClick}></SignButton>
            <SignButton sign="=" onClick={handleSignClick}></SignButton>
            <NumberButton number="0" onClick={handleNumberClick}></NumberButton>
            <SignButton sign="C" onClick={handleSignClick}></SignButton>
            <SignButton sign="/" onClick={handleSignClick}></SignButton>
        </div>
    </div>
}

export default App;
