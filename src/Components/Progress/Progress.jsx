import React from 'react'
import './Progress.css'

const Progress = ({value}) => {
    return <progress value={value} max={100} />
}

export default Progress
