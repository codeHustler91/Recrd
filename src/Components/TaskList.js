import React from 'react'
import Task from './Task'

export default function TaskList(props) {

    const ifNoProps = () => {
        console.log('tasklist', props)
        return props.tasks === null
            ? null
            : displayTasks()
    }
    const displayTasks = () => {
        return props.tasks.map(tasker => {
            return(
                < Task task={tasker} />
            )
        })
    }
        //     return <Task task={tasker} />
        // })
    // const displaytasks = () => {
    //     props.profile.data.tasks.map(task => {
    //         return(
    //             <div>
    //                 <h3>{task.title}</h3>
    //                 <p>{task.description}</p>
    //             </div>
    //         )
    //     })
    // }


    return(
        <ul>
            {ifNoProps()}
        </ul>
    )
}