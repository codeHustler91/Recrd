import React from 'react'
import ActiveTask from './ActiveTask'

export default function ActiveTaskContainer(props) {

    const conditionalRender = () => {
        return props.activeTask.id === undefined
            ? <p>No task selected</p>
            : < ActiveTask activeTask={props.activeTask} activeAttempts={props.activeAttempts} />
    }
    return(
        <div className='component-container'>
            <h1>Active Task</h1>
            {conditionalRender()}
        </div>
    )
}