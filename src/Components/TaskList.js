import React from 'react'
import Task from './Task'

export default function TaskList(props) {

    const displayTasks = () => {
        console.log(props.tasks)
        return props.tasks.map(tasker => {
            return <Task task={tasker} />
        })
    }


    return(
        <ul>
            {displayTasks()}
        </ul>
    )
}