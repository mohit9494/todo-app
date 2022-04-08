import React from 'react'
import { useState } from 'react'

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (event) => {
        event.preventDefault();

        if(!title || !desc) {
            alert("Please Enter Task and Description");
        }else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
        
    }

    return (
        <div className='container my-3'>
            <h3>Add Task</h3>
            <form onSubmit={submit}>
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}  className="form-control" id="desc" placeholder="Enter Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success mb-3">Add ToDo</button>
            </form>
        </div>
    )
}
