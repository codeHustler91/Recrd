import React from 'react'

export default function EditTaskForm(props) {

    let task = {
            title: props.activeTask.title,
            note: props.activeTask.note
    }
    return(
        <form onSubmit={(event) => props.editTask(event, task)}>
            <label>
                <input type='text' name='title' 
                    placeholder='enter task name'
                    onChange={props.setInput}>
                </input>
            </label>
            <label>
                <input type='text' name='note' 
                    placeholder='enter task note'
                    onChange={props.setInput}> 
                </input>
            </label>
            <button type='submit'>Update task</button>
        </form>
    )
}