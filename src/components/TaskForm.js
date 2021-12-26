import {useState} from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const TaskForm = ({ inputText, setInputText,tasks, setTasks,}) => {
 
  const handleSubmit = (e) =>{
    e.preventDefault()
    setTasks([...tasks, {text:inputText, isCompleted: false}])
    setInputText("")
  }

  return (

    <div>
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
