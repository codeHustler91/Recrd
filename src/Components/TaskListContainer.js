import React, { Component } from 'react'
import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm';

export default class TaskListContainer extends Component {

    state = {
        showForm: false
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
        const conditionalForm = this.state.showForm === true 
            ? <NewTaskForm 
                profile={this.props.profile} 
                showForm={this.showForm}
                getProfile={this.props.getProfile}/> 
            : null
        return(
            <div className='component-container'>
                {this.displayName()}
                <div className='component-list'>
                    <button onClick={()=>this.showForm()}>
                        {this.state.showForm ? 'Hide Form' : 'New Task'}
                    </button>
                    {conditionalForm}
                    <TaskList 
                        setActiveTask={this.props.setActiveTask}
                        profile={this.props.profile.data}
                        getProfile={this.props.getProfile}
                        tasks={this.props.tasks}
                    />
                </div>
            </div>
        )
    }
}