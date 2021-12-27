import {FaCheck, FaTrashAlt} from 'react-icons/fa'


const Task = ({task,tasks, setTasks}) => {
  const handleRemoveTask = () =>{
    setTasks(tasks.filter(el=> el.id!== task.id))
  }
  const handleCompleteTask = () =>{
    setTasks(tasks.map(el =>{
      if(el.id === task.id) {
        return{
          ...el, isCompleted: !task.isCompleted
        }
      }
      return el;
    }))
}


  return (
   
    <div className="bg-white text-black m-1 w-25 text-break d-flex flex-row align-items-start justify-content-between">
      <div className='mx-2' style={{
        textDecoration: task.isCompleted? 'line-through' : '',
        opacity: task.isCompleted?'0.5' : ''}}>
      {task.text}
      </div>
      <div className='d-flex flex-row'>
        <button 
        onClick={handleCompleteTask} 
        style={{
          backgroundColor: "White", 
          color:"#fcb045",
          border: "none"}}
        >
          <FaCheck/>
        </button>
        <button 
        onClick={handleRemoveTask} 
        style={{
          backgroundColor: "white", 
          color:"#f05454",
          border: "none"}}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
    
  )
}

export default Task
