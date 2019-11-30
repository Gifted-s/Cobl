import React from 'react'
import {Card} from 'reactstrap'
const Services = ({name, description , background}) => {
    return (
        <div className="cards">
            <Card style={{backgroundColor:`${background}`}}>
    <h5>{name}</h5>
    <hr></hr>
     <p>{description}</p>
                

            </Card>
        </div>
    )
}

export default Services
