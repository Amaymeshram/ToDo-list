import { useState } from "react";
import Header from "./header";
import Notebox from "./note box";
import Note from "./AddedNote";

const App = ()=>{
 
  const [notes , setNotes] = useState([])



  const addNote = (newNote) => {
  setNotes(prevNotes => [...prevNotes, newNote]);
};
  
  const deleteNote = (id)=>{
   setNotes(prevNotes =>prevNotes.filter((noteItem ,index)=>{
    return index !== id;
   }))
    
  }
  
  
  
return(
  <div className="P-cont">
        <Header/>

       <div>
       < Notebox noteAdd = {addNote} />

       </div>
         
         <div>
           
       {   notes.map((noteItem,index) =>   {
              return <Note
              key= {index} 
              id={index}
              title={noteItem.title}
              content = {noteItem.content}
            onDelete={deleteNote}
              />
          })
        }
          
         </div>

  </div>
)

}

export default App;