import React , {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
  
const Button = ()=>{
    const {toggleTheme}= useContext(ThemeContext)
return(
    <button onClick={toggleTheme}>Change Theme</button>
        )
}
       
export default Button
                
                
          


 