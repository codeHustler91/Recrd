import React from 'react'
import Timer from './Timer'

export default function ActiveTimerContainer(props) {

    const displayTimers = () => {
        return props.timers.map(timer => {
            return <Timer title={timer.title} taskId={timer.taskId}/>
        })
    }

    return(
        <div className='component-container'>
            <h1>{props.timers.length > 0 
                    ? 'Active Timers' 
                    : 'Timers go here'}
            </h1>
            {displayTimers()}
        </div>
    )
}