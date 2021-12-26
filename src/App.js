import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskForm from "./components/TaskForm";
import Task from './components/Task';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("")
  const [tasks, setTasks] = useState([])
  
   return (
    <div className="App">
      <h1>Linh's Tasks Tracker</h1>
      <div>
        
        <TaskForm  inputText={inputText} setInputText={setInputText} tasks={tasks}  setTasks={setTasks}/>
        {tasks.map(task =>(
          <Task key={uuidv4()} task={task} setTasks={setTasks}/>
        ))}

      </div>
    </div>
  

  );
}

export default App;
