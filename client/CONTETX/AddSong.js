import React , { useState} from 'react';

  
const AddSong= ({addsong})=>{
   const [name, setName]= useState('')
   const [department, setDepatment]= useState('')
   const [id, setId]= useState('');
  
const addSong=(e)=>{
e.preventDefault()
addsong(name, department, id )

}
    return (
        <div className="book-list"> 
            <form onSubmit={addSong}>
                <input name='name' placeholder='Enter name' onChange={(e)=>{
                  setName(e.target.value)
                }}/>

                 <input name='department' placeholder='Enter Department' onChange={(e)=>{
                  setDepatment(e.target.value)
                }}/>
                

                  <input name='id' placeholder='Enter Id' onChange={(e)=>{
                  setId(e.target.value)
                }}/>
                <br/>
                <input type='submit' value="AddSong" />
                
            </form>
            
        </div>
     )
}

export default AddSong