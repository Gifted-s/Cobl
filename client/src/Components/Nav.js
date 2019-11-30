import React , {useContext} from 'react'

import {Nav, NavItem, Navbar, NavbarBrand} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { DropdownContextProvider } from './DropdownContext';

const NavBar = () => {
    const {closeDropdown}= useContext(DropdownContextProvider)
    return (
        <Nav tabs id="nav">
            <Navbar>
            <NavbarBrand>
             COBL
            </NavbarBrand>
            <span onClick={()=> closeDropdown()} className="nav_menu_icon">
                        <svg width="30px" height="30px" viewBox="0 0 69 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                <g fillRule="nonzero" stroke="none">
                                    <g>
                                        <rect x="0" y="0" width="79" height="6.9072333" rx="3.10361665"></rect>
                                        <rect x="0" y="22" width="79" height="6.9072333" rx="3.10361665"></rect>
                                        <rect x="0" y="44.7927667" width="79" height="6.9072333" rx="3.10361665"></rect>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </span>
           
         
             <NavItem id="pusher">
                 <span>
              
                 </span>
            <NavLink id="link" to="/signup">REGISTER</NavLink>
             {/* <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" class="buttonnext209690039--prefix"><path d="M12 12L12 6 11 6 11 12 5 12 5 13 11 13 11 19 12 19 12 13 18 13 18 12z"></path></svg> */}
             {/* <img class="mUXrx" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE3IDE4Ij4KICA8cGF0aCBmaWxsPSIjMUQyRDNDIiBkPSJNMTEwMC4xNTc5OSwzNy42NTIwMzEgTDExMDAuNTQ1OTksMzcuNjUyMDMxIEMxMTAwLjU0NTk5LDM4Ljk0NjU0NDYgMTA5OS41MDE0OSw0MCAxMDk4LjIxNzk5LDQwIEMxMDk2LjkzNDUsNDAgMTA5NS44OSwzOC45NDY1NDQ2IDEwOTUuODksMzcuNjUyMDMxIEwxMDk2LjI3OCwzNy42NTIwMzEgTDExMDAuMTU3OTksMzcuNjUyMDMxIFogTTExMDYuMDkwODcsMzQuODY2MDg3NSBDMTEwNi40Mjk5OCwzNS4yMDgxMDgzIDExMDYuNTI2OTgsMzUuNjk4MDUxMiAxMTA2LjM0MzA3LDM2LjE0NTczMDYgQzExMDYuMTU5OTMsMzYuNTkyNjI3NCAxMTA1Ljc0Nzg4LDM2Ljg3MDQ3MDQgMTEwNS4yNjc1NCwzNi44NzA0NzA0IEwxMDkxLjE2NjksMzYuODcwNDcwNCBDMTA5MC42ODY1NiwzNi44NzA0NzA0IDEwOTAuMjc0NSwzNi41OTI2Mjc0IDEwOTAuMDkxMzcsMzYuMTQ1NzMwNiBDMTA4OS45MDgyMywzNS42OTgwNTEyIDEwOTAuMDA0NDYsMzUuMjA4MTA4MyAxMDkwLjM0MzU3LDM0Ljg2NjA4NzUgTDEwOTEuODk1NTYsMzMuMzAwNzc0OCBDMTA5MS45Njc3MywzMy4yMjc5ODc4IDEwOTIuMDA5NjMsMzMuMTI3MDI1MSAxMDkyLjAwOTYzLDMzLjAyMzcxNDUgTDEwOTIuMDA5NjMsMjkuODI3MzQ2IEMxMDkyLjAwOTYzLDI3LjEyNzk2NDMgMTA5My43NDk0MiwyNC43MzA2ODggMTA5Ni4yNzgzOSwyMy44ODc3NjcxIEMxMDk2LjMxNTY0LDIyLjg0MDU3MjkgMTA5Ny4xNzE1NiwyMiAxMDk4LjIxNzYxLDIyIEMxMDk5LjI2Mjg3LDIyIDExMDAuMTE4OCwyMi44NDA1NzI5IDExMDAuMTU2MDUsMjMuODg3NzY3MSBDMTEwMi42ODUwMiwyNC43MzA2ODggMTEwNC40MjU1OCwyNy4xMjc5NjQzIDExMDQuNDI1NTgsMjkuODI3MzQ2IEwxMTA0LjQyNTU4LDMzLjAyMzcxNDUgQzExMDQuNDI1NTgsMzMuMTI3MDI1MSAxMTA0LjQ2NjcxLDMzLjIyNzk4NzggMTEwNC41Mzg4OCwzMy4zMDA3NzQ4IEwxMTA2LjA5MDg3LDM0Ljg2NjA4NzUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOTAgLTIyKSIvPgo8L3N2Zz4K"></img> */}
            </NavItem>
            <NavItem>
            
            <NavLink id="link" to="/signin">SIGNIN</NavLink>
            </NavItem>
            <NavItem  onPointerOver={()=> closeDropdown()}> 
            <NavLink to='#' id="link" >FEATURES</NavLink><span className="toggle">

             <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"></path></svg> 
            </span>
            </NavItem>
            <NavItem>
            {/* <svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M20,11 L19,11 L19,8 L5,8 L5,19 L14,19 L14,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,5 C4,4.44771525 4.44771525,4 5,4 L9.38196601,4 C9.76073807,4 10.1070012,4.21400238 10.2763932,4.5527864 L11.5,7 L19,7 C19.5522847,7 20,7.44771525 20,8 L20,11 Z M5,7 L10.381966,7 L9.38196601,5 L5,5 L5,7 Z M20,16 L23,16 L23,17 L20,17 L20,20 L19,20 L19,17 L16,17 L16,16 L19,16 L19,13 L20,13 L20,16 Z"></path></svg> */}
            <NavLink id="link" to="/about">ABOUT</NavLink>
            </NavItem>
            
            

        
            
            
            
            
            
            
            
            </Navbar>
          
            
        </Nav>
    )
}



export default NavBar
