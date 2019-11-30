import React , { useState , useEffect} from 'react';
import AddSong from '../AddSong';

  
const SongList= ()=>{
   const [songs , setSong]= useState([
      {name:'Adewumi sunkanmi' , department:'Software Engineering', id :1},
      {name:'Olabode sunkanmi' , department:'Electrical Engineering', id :2},
      {name:'Toomoye Bunkunmi' , department:'Minning  Engineering', id :3},


   ])
   const [age ,setAge]=useState(1) 
   useEffect(()=>{
       console.log(songs)
   },
   [songs])
   useEffect(()=>{
       console.log(age)
   },[age])
  
  const addsong=(name , department , id )=>{
     
       setSong([...songs ,{name , department, id}])
   }

    return (
        <div className="book-list"> 
            <h1>Futa Student </h1>
            <ul className="book-list">
                {songs.map((song)=>{
                    return(
                        <li key ={song.id}>{song.name} | {song.department} | {song.id}</li>
                    )
                

                })}

            </ul>
            <AddSong addsong={addsong} />
            <button onClick={()=>{
                setAge(age+1)
            }}> THe current age is {age} </button>
            
        </div>
     )
}

export default SongList
  

      
    
    
       
   
       


  