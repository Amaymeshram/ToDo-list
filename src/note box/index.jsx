import { useState } from "react";
import "./index.css"

const Notebox = (props)=>{

const [note,setNote] = useState({
    title:"",
    content:"",
    errormsg:""
})

const makeChange= (e)=>{
    const {name , value} = e.target;

    setNote(preNote =>{
        return {
            ...preNote,[name]: value
        }
    })
}

const submitTodo = (event)=>{
    event.preventDefault();
    if(note.title == "" || note.content == ""){
        setNote({...note, errormsg:"please enter something"
        })
    }
    else{       
          props.noteAdd(note)
        setNote({
             title:"",
         content:"",
         errormsg:""
        })}


}

    return(
        <div className="note-cont">
            <form >
                
                <input name="title" onChange={makeChange} type="text"  value={note.title} placeholder="Title ToDo" />
                <textarea name="content" onChange={makeChange} value={note.content} 
                placeholder="Make a note.." />
                    <button onClick={submitTodo} className="btn btn-success add" >Add</button>
                    <br />
                    <p style={{color:"red", fontSize:"20px"}}>{note.errormsg}</p>
            </form> 
            
        </div>
    )
}

export default Notebox;