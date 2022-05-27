import React from "react";
import GlowyButton from "../widgets/GlowyButton";
const Nav = () => {
    return (
        <div className="-row- --col--11" >
            <nav>
                <GlowyButton to="/" float="right">Change Theme</GlowyButton>
                
            </nav>
        </div>
    );
};

export default Nav;