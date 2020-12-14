import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function StarshipInfo(props) {
    console.log(props.shipInfo.location.state)
    return(
        <div className="shipinfo">
            <h3>Name: </h3>{props.shipInfo.location.state.name}
            <br></br>
            <h3>Model: </h3>{props.shipInfo.location.state.model}
            <br></br>
            <br></br>
            <Link to="/">Return</Link>
        </div>
    )
} 