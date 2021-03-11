import React, {useState, useEffect, useRef } from 'react'

function ToDoForm(props) {
    
    const [input, setInput] = useState(props.edit ? props.edit.value :'')

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
        // This allows you to focus on any ref
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // This prevents the page from re-loading when clicking on submit

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
            // This creates a random ID number up to 1000
        })

        setInput('')
        // Without this we get a props.onSubmit is not a function
    }

    return (
        <form className="toDo__form" onSubmit = {handleSubmit} >
            {props.edit ? (
            <>
            <input 
            type="type" 
            placeholder="Update" 
            value={input} 
            name="text" 
            className= "toDo__input edit" 
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="toDo__button edit"> Update </button>
            </>) :
            (
            <><input 
                type="type" 
                placeholder="Add New" 
                value={input} 
                name="text" 
                className= "toDo__input" 
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="toDo__button"> Add New</button>
                </>)
            }
            
        </form>
    )
}

export default ToDoForm
