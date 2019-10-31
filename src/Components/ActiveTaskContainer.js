import React, { Component } from 'react'
import EditTaskForm from './EditTaskForm'
import Metric from './Metric'


export default class ActiveTaskContainer extends Component {

    state = {
        showForm: false
    }
    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }
    editTask = (event, data) => {
        event.preventDefault()
        const url = `https://recrd-rails-backend.herokuapp.com/tasks/${this.props.activeTask.id}`
        event.target.reset()
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
        }})
        .then(() => this.props.getProfile(this.props.activeTask.user_id))
    }
    displayAttempts = () => {
        return this.props.activeAttempts.map(attempt => {
            return <li className='new-item' key={attempt.id}>Attempt: {attempt.duration} seconds</li>
        })
    }
    conditionalForm = () => {
        return this.state.showForm 
            ? <EditTaskForm
                activeTask={this.props.activeTask}
                setInput={this.props.editActiveTask}
                editTask={this.editTask}/> 
            : null
    }
    render() {
        return(
            <div className='component-container'>
                <h1>Active Task</h1>
                <div className='component-list'>
                    <h3>Title: {this.props.activeTask.title}</h3>
                    <p>Note: {this.props.activeTask.note}</p>
                    <ul>
                        {this.displayAttempts()}
                    </ul>
                    <button onClick={() => this.toggleForm()}>
                        {this.state.showForm ? 'Hide Form' : 'Edit Task'}
                    </button>
                    <button onClick={this.props.addTimer}>New Timer</button>
                    {this.conditionalForm()}
                    <Metric attempts={this.props.activeAttempts} />
                </div>
            </div>
        )
    }
}