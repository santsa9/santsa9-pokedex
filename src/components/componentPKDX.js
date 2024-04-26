import React, { useState } from "react";
import '../css/componentPKDX.css';

function ComponentPKDX(props) {
    return (
        <div style={{backgroundColor: props.background}}>
            <img src={props.imatge}/>
            <h1>{props.titol}</h1>
            <p2>{props.textboto2}</p2>
            <p>{props.enllacboto2}</p>
        </div>
    )
}
export default ComponentPKDX;