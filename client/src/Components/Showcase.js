import React , { useContext} from 'react'
 import { Card, Col, Row } from 'reactstrap'
import { DropdownContextProvider } from './DropdownContext'
import {withRouter} from 'react-router-dom';
const Showcase = props => {
const {isOpen, closeDropdown , setObj}= useContext(DropdownContextProvider)
    return (
        // <Container md={12} sm={12}>
      <div className="show_container">
         
         {
             isOpen? <Card onMouseLeave={()=>closeDropdown()}>
             <span className="dismiss" onClick={()=> closeDropdown()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13">
                                                <path fill="rgba(0,0,0,1)" fillRule="nonzero" d="M8.254 6.5l4.383-4.382A1.24 1.24 0 0 0 10.882.363L6.5 4.746 2.118.363A1.24 1.24 0 1 0 .363 2.118L4.746 6.5.363 10.882a1.24 1.24 0 0 0 1.755 1.755L6.5 8.254l4.382 4.383a1.24 1.24 0 1 0 1.755-1.755L8.254 6.5z">
                                                </path>
                                            </svg>
                  </span>
                  <Row>
                  <Col md={6} sm={12}>
                  <h6>WE OFFER SERVICES SUCH AS</h6>
                
                  <ul>
                      <li className="mobile_sign_option" onClick={()=>{
                          props.history.push('/signup')
                      }}>Sign up</li>
                      <li  className="mobile_sign_option" onClick={()=>{
                          props.history.push('/signin')
                      }}>Sign in</li>
                      <li 
                       onClick={()=>{
                        setObj(0);
                         props.history.push('/service')
                    }}>
                      <span className="List_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                                                        <circle cx="9.5" cy="9.5" r="9.5" fill="#FFF" strokeWidth="1.8"></circle>
                                                        <path fillRule="nonzero" d="M13 4.058c-2.498-1.65-5.897-1.366-8.111.824A6.458 6.458 0 0 0 4.065 13L13 4.058zM6 14.935a6.449 6.449 0 0 0 8.111-.824A6.449 6.449 0 0 0 14.935 6L6 14.935z">
                                                        </path>
                                                    </g>
                                                </svg>
    </span>
                     Promote your business to the public 
                      </li>
                      <li
                        onClick={()=>{
                            setObj(1);
                             props.history.push('/service')
                        }}>
                      <span className="List_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                                                            <circle cx="9" cy="9" r="9" fill="#FFF" strokeWidth="1.8">
                                                            </circle>
                                                            <path fillRule="nonzero" strokeWidth="2" d="M6.376 14.231c.06.02.12.04.18.04.2 0 .4-.12.46-.32.1-.26-.04-.54-.3-.64a4.532 4.532 0 0 1-2.64-5.8 4.523 4.523 0 0 1 2.34-2.52c1.1-.5 2.32-.54 3.44-.12 1.18.44 2.66 2.343 3.14 3.503h-2.78l2.78 2.477 1.774-2.477h-.967c-.52-1.6-1.987-3.823-3.587-4.423a5.373 5.373 0 0 0-4.2.16c-1.34.62-2.36 1.7-2.86 3.08-1.08 2.8.38 5.98 3.22 7.04z">
                                                            </path>
                                                        </g>
                                                    </svg>
            </span> Run free ads for you across your region and across wide</li>
    
    
    
                      <li
                         onClick={()=>{
                            setObj(2);
                             props.history.push('/service')
                        }} >
                      <span className="List_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                                                        <path stroke="none" fillRule="nonzero" d="M10.84 7.608A.692.692 0 0 0 10.136 7a.692.692 0 0 0-.705.61l-1.33 6.506a3.319 3.319 0 0 0-.028.709c.086 1.242 1.074 1.863 2.063 1.863.988 0 1.977-.621 2.062-1.863a3.319 3.319 0 0 0-.027-.709l-1.33-6.507zm3.966 6.106c-.409-.296-.777-.818-1.287-.575a.803.803 0 0 0-.381.414c-.176.408-.102.84-.123 1.265-.054 1.14-.884 2.17-1.94 2.57a2.658 2.658 0 0 1-.954.176c-1.47-.007-2.812-1.309-2.866-2.777-.016-.453.074-.913-.138-1.35a.762.762 0 0 0-.294-.329c-.54-.316-1.067.18-1.445.605-.348.39-.887.796-1.34.535-.156-.089-.262-.242-.357-.394a6.766 6.766 0 0 1-1.001-3.066l.613-.02a.76.76 0 0 0 .736-.762v-.003a.773.773 0 0 0-.745-.77l-.6-.022c0-2.212 1.63-3.814 1.569-3.873l.464.442a.767.767 0 0 0 1.07-.012l.002-.002a.755.755 0 0 0 .017-1.05l-.422-.45a6.66 6.66 0 0 1 3.827-1.583l.02.61a.76.76 0 0 0 .763.736h.015a.76.76 0 0 0 .758-.734l.022-.615a6.656 6.656 0 0 1 3.826 1.59l-.403.436a.769.769 0 0 0 1.091 1.083l.43-.405a6.66 6.66 0 0 1 1.584 3.827l-.559.019a.79.79 0 0 0-.06 1.577l.591.065s-.68 4.15-2.483 2.842zM0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10z">
                                                        </path>
                                                    </svg>
    
            </span>Free business leadership mentorship</li>
        
                      <li
                         onClick={()=>{
                            setObj(3);
                             props.history.push('/service')
                        }}>
                      <span className="List_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 20 20">
                                                    <g fillRule="nonzero">
                                                        <path strokeWidth="1.8" d="M18.625 9.625a.375.375 0 0 0-.375.375 8.229 8.229 0 0 1-2.416 5.834A8.229 8.229 0 0 1 10 18.25a8.23 8.23 0 0 1-5.834-2.416A8.228 8.228 0 0 1 1.75 10a8.227 8.227 0 0 1 2.416-5.834A8.23 8.23 0 0 1 10 1.75 8.222 8.222 0 0 1 15.662 4h-1.376a.375.375 0 0 0 0 .75h2.25a.375.375 0 0 0 .376-.375v-2.25a.375.375 0 0 0-.75 0V3.44A9 9 0 1 0 19 10a.375.375 0 0 0-.376-.375z">
                                                        </path>
                                                        <path strokeWidth=".8" d="M15.25 10.25v-3H4.75v6h10.5v-3zm-.75 0v2.25h-9V8h9v2.25z">
                                                        </path>
                                                        <path d="M9.993 12.102a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75zm0-3c.62 0 1.125.504 1.125 1.125 0 .62-.504 1.125-1.125 1.125a1.126 1.126 0 0 1 0-2.25z">
                                                        </path>
                                                    </g>
                                                </svg>
    
    </span>
    Create a business network for you</li>
                   
                  </ul>
                  </Col>
                  <Col md={6} sm={12}>
                  <h6>OTHERS SERVICES PROVIDED</h6>
                  <ul>
                      <li
                      onClick={()=>{
                        setObj(4);
                         props.history.push('/service')
                    }}> 
             
                      <span className="List_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21">
                                                    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                                                        <circle cx="9.5" cy="9.5" r="9.5" fill="#FFF" strokeWidth="1.8"></circle>
                                                        <path fillRule="nonzero" d="M13 4.058c-2.498-1.65-5.897-1.366-8.111.824A6.458 6.458 0 0 0 4.065 13L13 4.058zM6 14.935a6.449 6.449 0 0 0 8.111-.824A6.449 6.449 0 0 0 14.935 6L6 14.935z">
                                                        </path>
                                                    </g>
                                                </svg>
    
    </span>
    Give you a free E-purchase platform
                      </li>
                      <li
                      onClick={()=>{
                        setObj(5);
                         props.history.push('/service')
                    }}>
                      <span className="List_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 20 24">
                                                    <path stroke="none" fillRule="nonzero" d="M10.865.36l3.334 3.275c1.342 1.347-.67 3.367-2.013 2.02l-.013-.013c-.413-.42-.75-.282-.75.31V16.43a1.43 1.43 0 0 1-1.432 1.426h.017a1.427 1.427 0 0 1-1.432-1.426V5.953c0-.596-.336-.732-.75-.31l-.014.013C6.47 7.002 4.457 4.982 5.8 3.636L9.09.365A1.267 1.267 0 0 1 10.864.36zM2.929 6.5a1.428 1.428 0 0 1 2.02 2.02 7.142 7.142 0 1 0 10.1 0A1.428 1.428 0 0 1 17.07 6.5c3.905 3.905 3.905 10.236 0 14.141-3.905 3.905-10.236 3.905-14.141 0-3.905-3.905-3.905-10.236 0-14.141z">
                                                    </path>
                                                </svg>
    
    </span>
    Earn a life time from the global pool </li>
               
                      <li
                      onClick={()=>{
                        setObj(1);
                         props.history.push('/service')
                    }}>
                      <span className="List_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 20 20">
                                                    <g fillRule="nonzero">
                                                        <path strokeWidth="1.8" d="M18.625 9.625a.375.375 0 0 0-.375.375 8.229 8.229 0 0 1-2.416 5.834A8.229 8.229 0 0 1 10 18.25a8.23 8.23 0 0 1-5.834-2.416A8.228 8.228 0 0 1 1.75 10a8.227 8.227 0 0 1 2.416-5.834A8.23 8.23 0 0 1 10 1.75 8.222 8.222 0 0 1 15.662 4h-1.376a.375.375 0 0 0 0 .75h2.25a.375.375 0 0 0 .376-.375v-2.25a.375.375 0 0 0-.75 0V3.44A9 9 0 1 0 19 10a.375.375 0 0 0-.376-.375z">
                                                        </path>
                                                        <path strokeWidth=".8" d="M15.25 10.25v-3H4.75v6h10.5v-3zm-.75 0v2.25h-9V8h9v2.25z">
                                                        </path>
                                                        <path d="M9.993 12.102a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75zm0-3c.62 0 1.125.504 1.125 1.125 0 .62-.504 1.125-1.125 1.125a1.126 1.126 0 0 1 0-2.25z">
                                                        </path>
                                                    </g>
                                                </svg>
            </span>Free class on monetizing your Facebook and Instagram’s page</li>
                      
    
                  </ul>
                  </Col>
                  </Row>
                 
             </Card>:
             null
         }
        
      
         
          
       <div className="image_back">
       <h1>COBL</h1>
           <p>Community of Oriented Business Leaders.</p>
       </div>
      </div>  
      
        // </Container>
       
    )
}



export default withRouter(Showcase)
