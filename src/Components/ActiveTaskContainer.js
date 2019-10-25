import React, { Component } from 'react'
import EditTaskForm from './EditTaskForm'
import Metric from './Metric'


export default class ActiveTaskContainer extends Component {

    state = {
        showForm: false
    }
    showForm = () => {
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
            return <li className='new-item' key={attempt.id}>Attempt: {attempt.duration}seconds</li>
        })
    }
    conditionalForm = () => {
        return this.state.showForm 
            ? <EditTaskForm 
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
                    <button onClick={() => this.showForm()}>
                        {this.state.showForm ? 'Hide Form' : 'Edit Task'}
                    </button>
                    <button onClick={this.props.addTimer}>New Timer</button>
                    {this.conditionalForm()}
                    <Metric attempts={this.props.activeAttempts} />
                </div>
            </div>
        )
    }
    // don't know if i need the stuff below
    // conditionalTasks = () => {
    //     return this.props.activeTask.id === undefined
    //         ? <p>No task selected</p>
    //         : < ActiveTask activeTask={this.props.activeTask} 
    //             activeAttempts={this.props.activeAttempts} 
    //             addTimer={this.props.addTimer}
    //             getProfile={this.props.getProfile}
    //             showForm={this.showForm}
    //             isShowForm={this.state.showForm}
    //             profile={this.props.profile}
    //         />
    // }
}