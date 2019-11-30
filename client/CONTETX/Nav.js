import React , {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

  
const NavBar= function(){
    const {isLightTheme, dark , light} = useContext(ThemeContext);
    const Theme = isLightTheme ? light : dark
    return (
        <nav style={{background:Theme.bg}}>
        <ul style={{background:Theme.bg}}>
            <li  style={{color:Theme.syntax}}>Home</li>
            <li style={{color:Theme.syntax}}>Contact</li>
            <li style={{color:Theme.syntax}}>About</li>
            
        </ul>

      </nav>
    )
}
export default NavBar;
   
       
     
           
       
        


   


  