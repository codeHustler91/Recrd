import React from 'react'
import TaskList from './TaskList'

export default function TaskListContainer(props) {

    return(
        <div>
            <h1>{props.user.name}'s Task List</h1>
            < TaskList tasks={props.tasks}/>
            <button>New Task</button>
            <button>New Timer</button>
        </div>
    )
}