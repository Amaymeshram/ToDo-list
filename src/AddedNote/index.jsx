import "./index.css"

const Note= (props)=>{

    const noteDelete= ()=>{
    props.onDelete(props.id);
    }

    
    return(
        <div className="container">
           <div className="cont">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button  onClick={noteDelete} className="btn btn-danger">Delete</button>
           </div>
        </div>
    )
}

export default Note;