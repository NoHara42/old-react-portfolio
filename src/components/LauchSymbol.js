import React from "react";
import './LauchSymbol.css';

function LauchSymbol() {
    return (
        <div class="container">
            <img class="responsiveLauch bounce" src={require("../assets/JustLauch.png")}/>
        </div>
    );
}

export default LauchSymbol;