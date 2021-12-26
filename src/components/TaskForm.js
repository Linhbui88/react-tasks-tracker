import {useState} from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ inputText, setInputText,tasks, setTasks,}) => {
 
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!inputText) return
    setTasks([...tasks, {text:inputText, id: uuidv4(), isCompleted: false}])
    setInputText("")
  }

  return (

    <div className= "mb-2">
      <form>
        <input 
          type="text" 
          value={inputText}
          placeholder="Add Task..."
          onChange={(e) => setInputText(e.target.value)} 
        />
        <button type="submit" onClick={handleSubmit}>
          <FaPlusSquare />
        </button>
      
          <select>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
      </form>
      
    </div>
  )
}

export default TaskForm
