import React ,{createContext , useState} from 'react'
 export const DropdownContextProvider=createContext()

const DropdownContext = (props) => {
    const [isOpen, setOpen]= useState(false);
    const [title, setTitle] = useState('');
    const [text, setText]=useState('')
    
   
    const Services=[
        {
            title:"Promote and Expand Your Business to the Public",
            text:"Do you intend reaching a lot of persons about your organization, business, skill, or have a business awareness you will want to pass across to people, COBl makes this advantage for you free."

        },
        {
            title:"Run Free Ads For Your Business, Across Wide",
            text:"COBl gives you the opportunity to place an business advert to the public. You can run an advert for life period for free."

        },
        {
            title:"Free Business Leadership Mentorship",
            text:"You will be given a free business mentorship, you will learn how to create a network for yourself. You will also get the mentorship books , signals, business strategy update and upcoming business structure and movement."

        },
        {
            title:"Create a Business Network For You",
            text:"Every organization, business strives due to the a business network. COBl’s E-Marketers will benefit from such a business network of sales , expansion , and maximized profits."

        },
        {
            title:"Gives You a free E-Purshase Platform",
            text:"You gain an open channel communication to your customers, and people at large wanting to know more about your goods, services or business."

        },
        {
            title:"Earn a Life Time from a Global Pool",
            text:"Been part of COBl system, you will earn from the global pool profit for a lifetime, go through the registration, you will know the percentage you can earn.NB you earn for a lifetime, as a registered member."

        },
        {
            title:"Free Guide On How To Monetize Your Facebook And Instagram's Page",
            text:"Part of the business mentorship is on how you can monetize your facebook and instagram page and leverage from it and build a cash flow from social media."

        },



    ]
    const setObj=(index)=>{
        const Service_object= Services[index];
        setTitle(Service_object.title);
        setText(Service_object.text);
      }
  
    
    const closeDropdown= ()=>{
        
        setOpen(!isOpen)
    }
    return (
        <DropdownContextProvider.Provider value={{closeDropdown , isOpen , setObj, service_obj:{title, text}}}>
            {props.children}
        </DropdownContextProvider.Provider>
    )
}

export default DropdownContext
