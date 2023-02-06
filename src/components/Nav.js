import React from "react";

export default function Nav() {
    return (
        <nav className="nav">
           <img src={require("../images/globe.png")} className="globe--img"/>
           <h1 className="title"> Our Travel Journal </h1> 
        </nav>
    )
}