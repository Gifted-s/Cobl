import React, {useContext} from 'react'
import {withRouter} from 'react-router-dom';
import { DropdownContextProvider } from './DropdownContext';
import {Spinner} from 'reactstrap'
const Service = (props) => {
   
    const {service_obj}= useContext(DropdownContextProvider)
    return ( 
        <React.Fragment>
            {
                service_obj.title?<div className="container">
                <div className=" row service_">
                    <div className="left mx-auto col-12 col-md-6 my-1 ">
                      <h1 className="text-capitalize text-center">
                       {service_obj.title}
                      </h1>
                    </div>
                    <div className="right mx-auto col-12 col-md-6 my-1">
                    <h3 className="display text-center my-3">
                     
                    {service_obj.title}
                    </h3>
                    {service_obj.text}
                      <div className="register_type cent">
                      <h4 style={{color:"rgba(0,0,0,0.6)"}} className="text-center ">You can register as a </h4>
                      <div className="row ">
                          <span className="btn-left mx-auto col-md-6  col-10">
                          <button  onClick={()=>{
                              props.history.push('/signup')
                          }} >A Business Leader</button>
                          </span>
                          <span className=" btn-right col-md-6 col-10">
                          <button 
                          onClick={()=>{
                              props.history.push('/signup')
                          }}> An E-Marketer</button>
                          </span>
                      </div>
                    

                       </div> 
                         <span
                          onClick={()=>{
                              props.history.push('/dashboard')
                          }} className="back">Go back</span>
                     
                    </div>

                 

                </div>
                

              </div>
                :
                <div className="container">
                <div className=" row service_">
                    <div className="left mx-auto col-12 col-md-6 my-1 ">
                      <h1 className="text-capitalize text-center">
                      Promote and Expand Your Business to the Public
                      </h1>
                    </div>
                    <div className="right mx-auto col-12 col-md-6 my-1">
                    <h3 className="display text-center my-3">
                     
                    Promote and Expand Your Business to the Public.
                    </h3>
                    Do you intend reaching a lot of persons about your organization, business, skill, or have a business awareness you will want to pass across to people, COBl makes this advantage for you free.
                      <div className="register_type cent">
                      <h4 style={{color:"rgba(0,0,0,0.6)"}} className="text-center ">You can register as a </h4>
                      <div className="row ">
                          <span className="btn-left mx-auto col-md-6  col-10">
                          <button  onClick={()=>{
                              props.history.push('/signup')
                          }} >A Business Leader</button>
                          </span>
                          <span className=" btn-right col-md-6 col-10">
                          <button 
                          onClick={()=>{
                              props.history.push('/signup')
                          }}> An E-Marketer</button>
                          </span>
                      </div>
                    

                       </div> 
                         <span
                          onClick={()=>{
                              console.log(props.history)
                              props.history.push('/dashboard')
                          }} className="back">Go back</span>
                     
                    </div>

                 

                </div>
                

              </div>
                }
                
           
        </React.Fragment>
    )
}

export default withRouter(Service) 
