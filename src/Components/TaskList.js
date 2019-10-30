import React from 'react'
import Task from './Task'

export default function TaskList(props) {

    const displayTasks = () => {
        return props.tasks.map(task => {
            return(
                < Task profile={props.profile}
                    task={task}
                    getProfileAndSetActiveTask={props.getProfileAndSetActiveTask}
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