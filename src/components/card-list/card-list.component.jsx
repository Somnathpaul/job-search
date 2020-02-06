import React from 'react';
import {Card} from '../card/card.component';
import './card-list.css';

export const CardList = props => {

    return (
        <div className="card-list">{
    
            props.jobs.map( data => (
                <Card key={data.id} jobs={data}> </Card>
                ))
            
        }
        </div>)
    }
    


