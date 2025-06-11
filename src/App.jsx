import { useState } from "react";
import Header from "./header";
import Notebox from "./note box";
import Note from "./AddedNote";
import "./App.css"

const App = ()=>{
 
  const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("note");
  return savedNotes ? JSON.parse(savedNotes) : [];
});



  const addNote = (newNote) => {
  setNotes(prevNotes => [...prevNotes, newNote]);
};
  
  const deleteNote = (id)=>{
   setNotes(prevNotes =>prevNotes.filter((noteItem ,index)=>{
    return index !== id;
   }))
    
  }
  
 const save = () => {
  localStorage.setItem("note", JSON.stringify(notes));
  alert("Notes saved successfully!"); 
}; 
  
return(
  <div className="P-cont">
        <Header/>

       <div>
       < Notebox noteAdd = {addNote} />

       </div>
         
         <div>
          <br />
           <center>
  <button onClick={save} className="btn btn-success px-5  save">Save</button>
</center>
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