import React, { useRef } from 'react'
import './AddTask.css'
import { useTodo } from '../Providers/TaskProvider';

const AddTask = ({taskType="add", id}) => {
    const { addTask, editTask } = useTodo();
    const taskComponentRef = useRef(null);
    const taskDescriptionRef = useRef(null);
    const taskDaysRef = useRef(null);
    const taskCompletionRef = useRef(null);

    const OnSubmitFormHandler = (e) => {
        e.preventDefault();
        if(taskType !== "add") {
            editTask({
                id,
                component: taskComponentRef.current.value,
                description: taskDescriptionRef.current.value,
                days: taskDaysRef.current.value,
                progress: taskCompletionRef.current.value
            });
            return;
        }
        addTask({
            id: Date.now().toString(),
            component: taskComponentRef.current.value,
            description: taskDescriptionRef.current.value,
            days: taskDaysRef.current.value,
            progress: taskCompletionRef.current.value
        });
    }


    return <div>
        <h2> Task Form </h2>
        <form className="form" onSubmit={OnSubmitFormHandler}>
            <div>Task component: <input type="text" ref={taskComponentRef} /></div>
            <div>Task Description: <input type="text" ref={taskDescriptionRef} /></div>
            <div>Number of days to complete: <input type="number" ref={taskDaysRef} /></div>
            <div>Current progress: <input type="number" ref={taskCompletionRef} /></div>
            <button className="pointer-cursor"> {taskType === "add" ? "Add Task" : "Edit Task"} </button>
        </form>
    </div>
}

export default AddTask
