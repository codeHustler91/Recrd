import React, { Component } from 'react'

export default class EditTaskForm extends Component {

    state = {
        title: '',
        note: ''
    }
    setInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const taskObject = {
                title: this.state.title,
                note: this.state.note
            }
        return(
            <form onSubmit={(event) => this.props.editTask(event, taskObject)}>
                <label>
                    <input type='text' name='title' 
                        placeholder='enter task name'
                        onChange={this.setInput}>
                    </input>
                </label>
                <label>
                    <input type='text' name='note' 
                        placeholder='enter task note'
                        onChange={this.setInput}> 
                    </input>
                </label>
                <button type='submit'>Update task</button>
            </form>
        )
    }
}