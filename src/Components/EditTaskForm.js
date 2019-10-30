import React, { Component } from 'react'

export default class EditTaskForm extends Component {

    // state = {
    //     title: '',
    //     note: ''
    // }
    // setInput = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    render(){
        const taskObject = {
                title: this.props.activeTask.title,
                note: this.props.activeTask.note
            }
        return(
            <form onSubmit={(event) => this.props.editTask(event, taskObject)}>
                <label>
                    <input type='text' name='title' 
                        placeholder='enter task name'
                        onChange={this.props.setInput}>
                    </input>
                </label>
                <label>
                    <input type='text' name='note' 
                        placeholder='enter task note'
                        onChange={this.props.setInput}> 
                    </input>
                </label>
                <button type='submit'>Update task</button>
            </form>
        )
    }
}