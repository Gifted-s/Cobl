import React, { Component } from 'react'
import {Spinner} from 'reactstrap';
import {withRouter} from 'react-router-dom';
class About extends Component {
    constructor(props){
        super(props);
    
    }
    render() {
        return (
            <React.Fragment>
                 <React.Suspense fallback={<div><Spinner/></div>}>
                     <div className="about container">
                        <div className="row row_">
                            <div className="col-12 mx-auto  col-md-12">
                              <h2 className="text-center"> About COBL</h2>
                              <div className="fullname">
                                <h4 className="text-center">Community of Oriented Business Leaders.</h4>
                              </div>
                              <div className=" col-12 col-md-8 mx-auto my-3 about-body">
                                  <div className="header_text"><h5>Goal</h5></div>
                                  <hr/>
                                  <div className="_text">Our goal is to turn Nigeria to a global village where 
                                  sales and purshase can be more productive and extending 
                                  business across all the part of the country
                                  </div>
                                  <hr/>
                                  <div className="header_text"><h6>We believe this is acheivable as we help you</h6></div>
                                  <hr/>
                                  <div className="_text">
                                      <div className=" service__">
                                      <span className="badge bg-dark">1</span>
                                      <span> Promote your business to the public  </span>
                                      </div>
                                      <div className=" service__">
                                      <span className="badge bg-dark">2</span>
                                      <span>Run free ads for you across your region and across wide  </span>
                                      </div>
                                      <div className=" service__">
                                      <span className="badge bg-dark">3</span>
                                      <span>Free business leadership mentorship </span>
                                      </div>
                                      <div className=" service__">
                                      <span className="badge bg-dark">4</span>
                                      <span>  Create a business network for you  </span>
                                      </div>
                                      <div className=" service__">
                                      <span className="badge bg-dark">5</span>
                                      <span>  Give you a free E-purchase platform </span>
                                      </div>
                                      <div className=" service__">
                                      <span className="badge bg-dark">6</span>
                                      <span>Earn a life time from the global pool   </span>
                                      </div>
                                       <div className=" service__">
                                      <span className="badge bg-dark">7</span>
                                      <span>Free class on monetizing your Facebook and Instagram’s page   </span>
                                      </div> 
                                      
                                      
                                

                                  </div>
                               
                              </div>
                            </div>
                            <div className="row">
                            <div className="col-10 col-md-6 my-0 mx-auto ">
                                          <div onClick={()=>{
                                              this.props.history.push('/signup')
                                          }} className="btn btn-primary">
                                              Register as and become a COBL member today
                                          </div>
                                      </div>
                     </div>
                        </div>
                      
                  
                    
                     </div>
                    
                 </React.Suspense>
            </React.Fragment>
               
            
        )
    }
}
export default withRouter(About)