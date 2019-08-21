import React from 'react'
import Task from './Task'

export default function TaskList(props) {

    const displayTasks = () => {
        return props.tasks.map(task => {
            return(
                < Task setActiveTask={props.setActiveTask} 
                    task={task} 
                />
            )
        })
    }
    return(
        <ul>
            {displayTasks()}
        </ul>
    )
}