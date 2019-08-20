import React from 'react'
import TaskList from './TaskList'

export default function TaskListContainer(props) {

    const displayName = () => {
        return props.profile.length === 0
            ? null
            : <h1>{props.profile.data.attributes.name.toUpperCase()}'s Task List</h1>
    }

    // console.log('taskListContainer', props.profile.data.attributes.tasks)
    
    return(
        <div className='component-container'>
            {displayName()}
            <TaskList tasks={
                    props.profile.length === 0
                        ? null
                        : props.profile.data.attributes.tasks
                    } />
            <button>New Task</button>
            <button>New Timer</button>
        </div>
    )
}