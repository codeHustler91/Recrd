import React, { useState, useEffect } from 'react'
import Delete from './Delete'

const Timer = (props) => {

    const [ seconds, setSeconds ] = useState(0);
    const [ isOn, setIsOn ] = useState(false);

    const toggle = () => {
        setIsOn(!isOn)
    }
    const reset = () => {
        setSeconds(0)
        setIsOn(false)
    }
    useEffect(() => {
        let interval = null;
        if (isOn) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 0.5)
            }, 500)
        } else if (!isOn && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isOn, seconds]);

    const displaytime = () => {
        if (seconds < 60) {
            return `${seconds}s`
        } else if ( seconds > 60 && seconds < 3600 ) {
            return `${(seconds / 60).toFixed(2) }mins`
        } else if ( seconds >= 3600 ) {
            return `${(seconds / 3600).toFixed(2) }hours`
        } else return seconds
    }
    const postAndReset = (event) => {
        props.postTime(event, {task_id: props.taskId, duration: seconds})
        setSeconds(0)
        props.setActiveTask(props.taskId)
    }

    return (
        <div className='timer'>
            <h3>
                Timer for: {props.title}
            </h3>
            <div className='time'>
                <p>{displaytime()}</p>
            </div>
            <button onClick={toggle}>
                {isOn ? 'Pause' : 'Start'}
            </button>
            <button onClick={postAndReset}>
                Log Split
            </button>
            <button onClick={reset}>
                Reset
            </button>
            <Delete />
        </div>
    )
}
export default Timer;