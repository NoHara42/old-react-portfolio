import React from "react";
import './LauchLogo.css';


function LauchLogo() {
    return (
        <div class="container">
            <img class="responsiveLogo" src={require("../assets/LauchLogoTrimmed2.png")}/>
        </div>
    );
}

export default LauchLogo;