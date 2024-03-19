import React, { useState } from "react";
import NumberButton from "./NumberButton";
import SignButton from "./SignButton";

const titleStyle = {
    "text-align": "center",
    "width": "15rem"
}

function App () {
    const [input, setInput] = useState("");
    const [sign, setSign] = useState("");
    var [res, setRes] = useState(0);

    function compute (sign) {
        var tempRes = res;
        switch (sign) {
            case "+":   
                tempRes += parseInt(input);
                setInput("");
                break;
            case "-":   
                tempRes -= parseInt(input);
                setInput("");
                break;
            case "*":   
                tempRes *= parseInt(input);
                setInput("");
                break;
            case "/":   
                tempRes /= parseInt(input);
                setInput("");
                break;
        }
        return tempRes;
    }

    function handleSignClick(sign) {
        if (sign === "C") {
            setInput("");
            setSign("");
            setRes(0);
        } else if (sign === "=") {
            setRes(compute(sign));
        } else {
            setRes(compute(sign));
        }
    }
    
    function handleNumberClick (number) {
        var updatedInput = input + number;
        setInput(updatedInput);
    }

    return <div>
        <h1 style={titleStyle}>Calculator</h1>
        <div className="main-display">
            <div className="display">
                {input}
                <div className="sign-display flex flex-col">
                    {sign} {res}
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
