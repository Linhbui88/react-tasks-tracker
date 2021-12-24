import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import TaskList from './components/TaskList';
import Task from './components/Task';
import './App.css';

function App() {
  const [textInput, setTextInput] = useState("")
  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    setTasks([
      ...tasks, {text: textInput, completed:false, id: uuidv4()}
    ]);
    setTextInput("");
   }
   console.log(tasks)
  return (
    <div className="App">
      <h1>Linh's Tasks Tracker</h1>
      <form>
        <input 
          type="text" 
          placeholder="task" 
          value={textInput} 
          onChange={(e) => setTextInput(e.target.value)} 
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
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  

  );
}

export default App;
