import React from 'react'
import TaskList from './TaskList'

export default function TaskListContainer(props) {

    return(
        <div className='sub-container'>
            <h1>{props.user.name.toUpperCase()}'s Task List</h1>
            < TaskList tasks={props.tasks}/>
            <button>New Task</button>
            <button>New Timer</button>
        </div>
    )
}