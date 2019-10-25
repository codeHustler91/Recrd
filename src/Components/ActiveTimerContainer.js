import React from 'react'
import Timer from './Timer'

export default function ActiveTimerContainer(props) {

    const displayTimers = () => {
        return props.timers.map(timer => {
            return <Timer title={timer.title} 
                        activeTask={props.activeTask} 
                        taskId={timer.taskId} 
                        postTime={postTime} 
                        // setActiveTask={props.setActiveTask}
                    />
        })
    }
    const postTime = (event, data) => {
        event.preventDefault()
        const url = 'https://recrd-rails-backend.herokuapp.com/attempts/'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
        }})
        .then(resp => resp.json())
        .then(console.log)
        // .then(() => props.setActiveTask(props.activeTask.id))
    }

    return(
        <div className='component-container'>
            <h1>{props.timers.length > 0 
                    ? 'Active Timers' 
                    : 'No Active Timers'}
            </h1>
            <div className='reverse-column'>
                {displayTimers()}
            </div>
        </div>
    )
}