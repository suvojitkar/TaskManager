import React, { useState } from 'react'
import { useTodo } from '../../Providers/TaskProvider'
import './TaskList.css';
import Card from '../../Components/Card/Card';
import Progress from '../../Components/Progress/Progress';
import AddTask from '../../Components/AddTask';

const TaskList = () => {
    const {tasks, deleteTask, editTask} = useTodo();

    const CardTask = ({task}) => {
        const [isEdit, setIsEdit] = useState(false);

        const onDeleteTaskHandler = (id) => {
            deleteTask({
                id
            });
        }
    
        const onEditTaskHandler = (e, id) => {
            e.stopPropagation();
            // editTask({
            //     id
            // });
            setIsEdit(p => !p);
        }

        return <Card>
        <div className="actions">
            <button className="pointer-cursor" onClick={() => onDeleteTaskHandler(task.id)}> 🗑️ </button>
            <button className="pointer-cursor" onClick={(e) => onEditTaskHandler(e, task.id)}> ✏️ </button>
        </div>
        <div style={{ width: "calc(100% - 100px)" }}> {task.description} </div> <br />
        <div className="component"> <span className="componentName">{task.component.toUpperCase()}</span> </div> <br />
        <div> ID-{task.id} </div> <br />
        <div> Remaining Days: {task.days} </div> <br />
        <Progress value={task.progress} />  
        {isEdit && <AddTask taskType="edit" id={task.id}/>}
    </Card>
    }
    return <><h2> Tasks </h2>
        <div className="cardLayout">
            {
                tasks.length > 0 ? tasks.map(task => <CardTask key={task.id} task={task}/>) : <div> No tasks available! </div>
            }
        </div></>
}

export default TaskList