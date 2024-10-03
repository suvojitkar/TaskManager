import React, { useEffect } from 'react'
import AddTask from '../Components/AddTask'
import TaskList from './TaskList/TaskList'
import { useTheme } from '../Providers/ThemeProvider'

const Home = () => {
    const {isDarkMode, toggleDarkMode} = useTheme();

    useEffect(() => {
        const theme = isDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }, [isDarkMode])

    return <>
        <button onClick={() => toggleDarkMode()}> Change Theme </button>
        <AddTask />
        <TaskList />
    </>
}

export default Home
