import React, {useState} from 'react'

function ToDoForm(props) {
    
    const [input, setInput] = useState('')

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
            <input 
            type="type" 
            placeholder="Add New" 
            value={input} 
            name="text" 
            className= "toDo__input" 
            onChange={handleChange}
            />
            <button className="toDo__button"> Add New</button>
        </form>
    )
}

export default ToDoForm
