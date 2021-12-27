import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskForm from "./components/TaskForm";
import Task from './components/Task';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("")
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")))
  const [status, setStatus] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState([])

  const handleFilteredTasks = () =>{
    switch(status){
      case 'completed' :
        setFilteredTasks(tasks.filter(task=> task.isCompleted === true ))
        break;
      case 'uncompleted' :
        setFilteredTasks(tasks.filter(task=> task.isCompleted === false ))
        break;
        default:
          setFilteredTasks(tasks)
    }
  }

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() =>{
    handleFilteredTasks()
  },[status, tasks])
  
   return (
    <div className="App d-flex align-items-center">
      <h1 className="mb-5">Linh's Tasks Tracker</h1>
    
      <TaskForm  
      inputText={inputText} 
      setInputText={setInputText} 
      tasks= {tasks}  
      setTasks={setTasks} 
      setStatus={setStatus}/>

      {filteredTasks.map(task =>(
        <Task key={uuidv4()} task={task} tasks={tasks} setTasks={setTasks}/>
      ))}
    </div>
  

  );
}

export default App;
