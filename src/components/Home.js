import React, { useState } from 'react'
import Lists from "./Lists";

const Home = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    const handleClickBtn = () => {
        console.log(tasks);
        setTasks(input)
        setInput("")
    }    
  return (
    <div>
        <input onChange={handleInputChange} value={input}/>
        <button onClick={handleClickBtn}>Add task</button>
        {tasks.map(() => {
            return <Lists />
        })}
    </div>
  )
}

export default Home