import React ,{createContext , useState} from 'react'
 export const DropdownContextProvider=createContext()

const DropdownContext = (props) => {
    const [isOpen, setOpen]= useState(false);
    
    const user=  localStorage.getItem('user');
    const userJSON= JSON.parse(user)
   console.log(userJSON)
    
    const closeDropdown= ()=>{
        
        setOpen(!isOpen)
    }
    return (
        <DropdownContextProvider.Provider value={{closeDropdown , isOpen}}>
            {props.children}
        </DropdownContextProvider.Provider>
    )
}

export default DropdownContext
