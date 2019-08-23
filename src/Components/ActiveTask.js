import React from 'react'
import EditTaskForm from 'react'
import Delete from './Delete'

export default function ActiveTask(props) {

    const displayAttempts = () => {
        return props.activeAttempts.map(attempt => {
            return <li className='new-item' key={attempt.id}>
                        Attempt: {attempt.duration}seconds
                        <Delete />
                    </li>
        })
    }

    const conditionalForm = () => {
        console.log(props.isShowForm)
        return props.isShowForm === true ? <EditTaskForm profile={props.profile} /> : null
    }

    return(
        <div className='component-list'>
            <h3>Title: {props.activeTask.title}</h3>
            <p>Note: {props.activeTask.note}</p>
            <ul>
                {displayAttempts()}
            </ul>
            <button onClick={() => props.showForm()}>
                {props.isShowForm ? 'Hide Form' : 'Edit Task'}
            </button>
            <button onClick={props.addTimer}>New Timer</button>
            {conditionalForm()}
        </div>
    )
}