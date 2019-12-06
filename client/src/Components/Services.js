import React from 'react'
import {Card} from 'reactstrap'
const Services = ({name, description , background}) => {
    return (
        <div className="cards">
            <Card style={{backgroundColor:`${background}`}}>
    <h5 style={{color:'rgba(0,0,0,0.9)'}}>{name}</h5>
    <hr></hr>
     <p  style={{color:'rgba(0,0,0,0.7)'}}>{description}</p>
                

            </Card>
        </div>
    )
}

export default Services
