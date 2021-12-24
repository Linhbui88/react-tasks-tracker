import React, {useContext} from 'react';
import Task from "./Task"


const TaskList = ({tasks, setTasks}) => {
  return (
    <div>
      <ul>
        {tasks.map((task) =>(
          <div key={task.id}>
            <Task taskText={task.text} />
          </div>
        ))}
      </ul>
     
    </div>
  )
}

export default TaskList
