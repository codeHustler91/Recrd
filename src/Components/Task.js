import React from 'react'
import Delete from './Delete'

export default function Task(props) {

    const getProfileAndSetActiveTask = () => {
        console.log('get profile and set active task clicked, props.profile.id', props.profile.id)
        return props.getProfile(props.profile.id).then(props.setActiveTask(props.task.id))
    }

    return(
        <li className='new-item clickable'
            onClick={ () => getProfileAndSetActiveTask() }>
            {props.task.title}
            <Delete />
        </li>
    )
}