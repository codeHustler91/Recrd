import React from 'react'
import EditTaskForm from 'react'

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
    // const editTask = (event, id) => {
    //     event.preventDefault()
    //     const url = `http://localhost:3000/tasks/${id}`
    //     const data = {
    //         title: props.activeTask.title,
    //         note: props.activeTask.note,
    //         user_id: props.activeTask.user_id
    //     }
    //     event.target.reset()
    //     fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers:{
    //           'Content-Type': 'application/json'
    //     }})
    //     .then(() => this.props.getProfile(props.activeTask.user_id))
    // }
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