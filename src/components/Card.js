import React from "react";


export default function Card(props) {
    return (
        <div className="card">
        <img src={require(`../images/${props.image}`)} className="card--img"/>

        <div className="maps">
            <img src={require("../images/location.png")} className="location--img"/>
            <h2 className="general"> {props.generalLocation} </h2>
            <a href={props.googleLink} className="google"> Visit on Google Maps </a>
        </div>
        
       
        <h1 className="city">{props.specificLocation}</h1>
        <span className="date">{props.dates}</span>
        <p className="description">{props.description}</p>
        </div>
    )
}