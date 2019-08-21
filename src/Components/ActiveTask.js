import React from 'react'

export default function ActiveTask(props) {


    // const conditionalRender = () => {
    //     return props.activeTask === {}
    //         ? <p>No task selected</p>
    //         : < ActiveTask activeTask={props.activeTask} />
    // }
    const displayAttempts = () => {
        return props.activeAttempts.map(attempt => {
            return <li className='new-item' key={attempt.id}>Attempt: {attempt.duration}seconds</li>
        })
    }

    return(
        <div className='component-list'>
            <h3>Title: {props.activeTask.title}</h3>
            <p>Note: {props.activeTask.note}</p>
            <ul>
                {displayAttempts()}
            </ul>
            <button>Edit Task</button>
            <button>New Timer</button>
        </div>
    )
}