import React, { createContext, useContext, useReducer, useState } from 'react'
import TaskReducer from '../Reducers/TaskReducers';

const TaskContext = createContext();

const TaskProvider = ({children}) => {
    const [tasks, dispatch] = useReducer(TaskReducer, []);

    const addTask = ({id, component, description, days, progress}) => {
        dispatch({
            type: "ADD",
            payload: {id, component, description, days, progress}
        });
    }

    const deleteTask = ({id}) => {
        dispatch({
            type: "DELETE",
            payload: {id}
        });
    }

    const editTask = ({id, component="componentEdited", description="DescriptionEdited", days="DaysEdited", progress="ProgressEdited"}) => {
        dispatch({
            type: "EDIT",
            payload: {id, component, description, days, progress}
        });
    }

    return <TaskContext.Provider value={{tasks, addTask, deleteTask, editTask}}> { children } </TaskContext.Provider>
}

export const useTodo = () => {
    return useContext(TaskContext);
}

export default TaskProvider;
