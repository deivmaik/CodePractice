import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

function ToDoList() {

    const [toDos, setToDos] = useState([])

    const addToDo = toDo => {
        if(!toDo.text || /^\s*$/.test(toDo.text)){
            return
        }

        // This is so when a user type a empty space it doesn't get recorded

        const newToDos = [toDo, ...toDos]

        setToDos(newToDos)
    }



    const updateToDo = (toDoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setToDos(prev => prev.map(item =>(item.id === toDoId ? newValue : item)))
    }



    const removeToDo = id => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id)

        setToDos(removeArr)
    }



    const completeToDo = id => {
        let updatedToDos = toDos.map(toDo =>{
            if (toDo.id ===id) {
                toDo.isComplete = !toDo.isComplete
            }
            return toDo
        })
        setToDos(updatedToDos)
    }

    return (
        <div>
           <h1> What's the plan for today?</h1>
           <ToDoForm onSubmit={addToDo} />
           <ToDo toDos={toDos} completeToDo={completeToDo} removeToDo={removeToDo} updateToDo = {updateToDo}/>
           {/* This allow us to delete the entries */}
        </div>
    );
}

export default ToDoList
