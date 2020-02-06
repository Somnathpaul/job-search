import React from 'react';

import './card.css';

export const Card = (props)=> (
    <div className="card">
        <img alt="avatar" src={props.jobs.company_logo} style={{ height: '50px' , width: '50px'}} />
        <h4>Title: {props.jobs.title}</h4>
        <h5>Type: {props.jobs.type}</h5>
        <h5> Company: {props.jobs.company}</h5>
        <h5>location: {props.jobs.location}</h5>
        
    </div>
)