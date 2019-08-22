import React from 'react'

export default function Task(props) {

    return(
        <li className='new-item clickable'
            onClick={ ()=>props.setActiveTask(props.task) }>
            {props.task.title}
        </li>
    )
}