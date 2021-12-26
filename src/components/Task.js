import {FaCheckSquare, FaTrashAlt} from 'react-icons/fa'


const Task = ({task,tasks, setTasks}) => {
  const handleRemoveTask = () =>{
    setTasks(tasks.filter(el=> el.id!== task.id))
  }
  return (
   
    <div className="bg-white text-black m-1 w-25 text-break d-flex flex-row align-items-start justify-content-between">
      <div className='mx-2'>
      {task.text}
      </div>
      <div className='d-flex flex-row'>
        <button><FaCheckSquare /></button>
        <button onClick={handleRemoveTask}><FaTrashAlt /></button>
      </div>
    </div>
    
  )
}

export default Task
