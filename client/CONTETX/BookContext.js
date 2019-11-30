    import React, {createContext, useState} from 'react';


   export const BookContext= createContext();

   const BookContextProvider= (props)=>{
   const [books, setBooks]= useState([
 {title:"the name of us" ,id :1},
 {title:"the name of people" ,id :2},
 {title:"the name of fors" ,id :3},
 {title:"the boys pen" ,id :4}

   ])
return(
    <BookContext.Provider value={{books}}>
        {props.children}
    </BookContext.Provider>
)
    }

export default   BookContextProvider