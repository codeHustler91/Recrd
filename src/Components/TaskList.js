import React from 'react'
import Task from './Task'

export default function TaskList(props) {

    const displayTasks = () => {
        return props.tasks.map(task => {
            return(
                < Task setActiveTask={props.setActiveTask}
                    profile={props.profile}
                    getProfile={props.getProfile}
                    task={task}
                    key={task.id || (Math.floor(Math.random() * Math.floor(1000)))}
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