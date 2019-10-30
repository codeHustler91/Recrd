import React from 'react'
import Delete from './Delete'

export default function Task(props) {

    return(
        <li className='new-item clickable'
            onClick={ () => props.getProfileAndSetActiveTask(props.profile.id, props.task.id) }>
            {props.task.title}
            <Delete />
        </li>
    )
}