import { useState } from "react";

export function CreateTodo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  return (
    <div> 
      <input id="title" style={{
        padding: 10,
        margin: 10 
      }} type="text" placeholder="title" 
          onChange={(e)=>{
            setTitle(e.target.value);
          }} /> <br />
      
      <input id="desc" style={{
        padding: 10,
        margin: 10 
      }} type="text" placeholder="description" 
          onChange={(e)=>{
            setDescription(e.target.value);
          }} /> <br />
      
      <button onClick={() => {
        fetch('http://localhost:3000/todo', {
          method: 'POST',
          body: JSON.stringify({ 
            title: title,
            description: description
            // title: document.getElementById('title').value,
            // description: document.getElementById('desc').value

          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(async (res) => {
          const json = await res.json();
          console.log(json)
          alert("Todo Added");
        })
      }}>Add Todo</button>
      
    </div>
  )
}