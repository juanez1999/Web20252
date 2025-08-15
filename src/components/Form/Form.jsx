import { useState } from "react";

const Form = () => {
    const [taskInput,setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);
    //taskInput = lo que escribe el usuario --> hola
   
    const sendForm = (e) => {
        e.preventDefault();
        setTasks([...tasks, taskInput]);
        setTaskInput('');
    }

    const handleDelete = (id) => {
        const taskFiltered = tasks.filter((task, index) => id !== index);
        setTasks(taskFiltered);
    }

    return (
    <>
        <form onSubmit={(e) => sendForm(e)}>
            <input
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Ingresa una tarea"
            value={taskInput} //hola
            />
            <button type="submit">Agregar</button>
        </form>
        {tasks.length > 0 && tasks.map((task,index) => (
            <div key={index}>
                <li>{task}</li>
                <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
        )
        )}
    </>
    )
}

export default Form;