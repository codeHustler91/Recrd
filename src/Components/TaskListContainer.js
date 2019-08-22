import React, { Component } from 'react'
import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm';

export default class TaskListContainer extends Component {

    state = {
        showForm: false,
        tasks: [...this.props.profile.data.attributes.tasks]
    }

    addTask = (event, taskObject) => {
        event.preventDefault()
        this.setState({
            tasks: [...this.state.tasks, taskObject]
        })
        event.target.reset()
    }

    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    displayName = () => {
        return <h1>{this.props.profile.data.attributes.name.toUpperCase()}'s Task List</h1>
    }
    
    render(){
        const conditionalForm = this.state.showForm === true ? <NewTaskForm addTask={this.addTask}/> : null
        return(
            <div className='component-container'>
                {this.displayName()}
                <div className='component-list'>
                    <TaskList 
                        setActiveTask={this.props.setActiveTask}
                        profile={this.props.profile.data} 
                        tasks={this.state.tasks}
                    />
                    <button onClick={()=>this.showForm()}>
                        {this.state.showForm ? 'Hide Form' : 'New Task'}
                    </button>
                    <button>New Timer</button>
                    {conditionalForm}
                </div>
            </div>
        )
    }
}