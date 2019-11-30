import React , {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import { Auth } from '../../contexts/AuthContext';
import { BookContext } from './BookContext';

  const BookList = ()=>{
   
    const {books}= useContext(BookContext);
    const {isLightTheme, dark , light} = useContext(ThemeContext);
    const {isAuthenticated, changelogin} = useContext(Auth);
    const Theme = isLightTheme ? light : dark
    return(
        
        <div className="book-list"  style={{background:Theme.bg}}>
          <h2 onClick={changelogin}>{isAuthenticated?'Logged in': 'Not Logged in'}</h2>
         <ul className="book-list" style={{background:Theme.bg}}>
           {books.map((book)=>{
             return(
              <li key={book.id}  style={{color:Theme.syntax}}>{book.title}</li>
             )
           })}
            
            
        </ul>

      </div>
    )
  }

  export default BookList
      
  
