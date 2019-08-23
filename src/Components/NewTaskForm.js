import React, { Component } from 'react'

export default class NewTaskForm extends Component {

    state = {
        title: '',
        note: ''
    }
    setInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    createTask = (event) => {
        event.preventDefault()
        const url = `http://localhost:3000/tasks`
        const data = {
            title: this.state.title,
            note: this.state.note,
            user_id: this.props.profile.data.id
        }
        event.target.reset()
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
        }})
        .then(() => this.props.getProfile(data.user_id))
    }

    render(){

        return(
            <form onSubmit={this.createTask}>
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
                <button type='submit'>Add task</button>
            </form>
        )
    }
}