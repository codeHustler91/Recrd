import React, { Component } from 'react'
import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm';

export default class TaskListContainer extends Component {

    state = {
        showForm: false
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }
    displayName = () => {
        return <h1>{this.props.profile.data.attributes.name.toUpperCase()}'s Task List</h1>
    }
    conditionalForm = () => {
        return this.state.showForm
            ? <NewTaskForm 
                profile={this.props.profile} 
                showForm={this.showForm}
                getProfile={this.props.getProfile}/> 
            : null
    }
    
    render(){
        return(
            <div className='component-container'>
                {this.displayName()}
                <div className='component-list'>
                    <button onClick={()=>this.toggleForm()}>
                        {this.state.showForm ? 'Hide Form' : 'New Task'}
                    </button>
                    {this.conditionalForm()}
                    <TaskList 
                        profile={this.props.profile.data}
                        tasks={this.props.profile.data.attributes.tasks}
                        getProfile={this.props.getProfile}
                        getProfileAndSetActiveTask={this.props.getProfileAndSetActiveTask}
                    />
                </div>
            </div>
        )
    }
}