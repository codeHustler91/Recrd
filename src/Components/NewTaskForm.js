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
        const url = 'https://recrd-rails-backend.herokuapp.com/tasks'
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
        .then(resp => resp.json())
        .then(console.log)
        // .then(() => this.props.setProfile(data.user_id))
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