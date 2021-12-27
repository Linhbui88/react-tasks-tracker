import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ inputText, setInputText,tasks, setTasks, setStatus}) => {
 
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!inputText) return
    setTasks([...tasks, {text:inputText, id: uuidv4(), isCompleted: false}])
    setInputText("")
  }
  const handlleStatusChange = (e) =>{
    e.preventDefault()
    setStatus(e.target.value)
  }

  return (

    <div className= "mb-2 d-flex flex-row">
      <form className='mx-4'>
        <input 
          type="text" 
          value={inputText}
          placeholder="Add Task..."
          onChange={(e) => setInputText(e.target.value)} 
        />
        <button 
        type="submit" 
        style={{
          backgroundColor: "#fcb045", 
          color:"white",
          border: "none"}} 
        onClick={handleSubmit}>
          <FaPlus />
        </button>
      </form>
      <select onChange={handlleStatusChange} style={{color:"#fcb045"}}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      
    </div>
  )
}

export default TaskForm
