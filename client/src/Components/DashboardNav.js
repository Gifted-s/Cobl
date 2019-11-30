import React from 'react'

const DashboardNav = () => {
    return (
        
        <div className=" nav_cont">
            <span className="nav_item">
               <span className="nav_icon">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                            <defs>
                                <path id="aredi" d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-13a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2">
                                </path>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <circle cx="16" cy="16" r="16" fill="#182a9c" opacity=".409"></circle>
                                <g transform="translate(6 6)">
                                    <circle cx="10" cy="10" r="9" fill="#FFF"></circle>
                                    <use fill="#182a9c" xlink-href="#aredi"></use>
                                </g>
                            </g>
                        </svg>

                        <span>Cobl provides you with the best way to promote your business <span className="btn ">Get started now</span></span>
               </span>

               
            </span>

         
            
        </div>
    )
}

export default DashboardNav
