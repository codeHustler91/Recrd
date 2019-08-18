import React, { Component } from 'react'
import ActiveTask from './Components/ActiveTask'
import ActiveTimers from './Components/ActiveTimers'
import TaskListContainer from './Components/TaskListContainer';

export default class MainContainer extends Component {

    state = {
        user: {
            name: 'dustin',
            theme: 'dark'
        },
        tasks: ['write poetry', 'take a bath', 'fall asleep', 'study']
    }

    // might want to serialize data to get all user info in the beginning
    // componentDidMount() {
    //     fetch(`localhost:/3000user/${id}`)
    //         .then(resp => resp.json())
    //         .then(profile => this.setState({ user: profile}))
    // }

    render() {
        return(
            <div id='main-container'>
                < TaskListContainer user={this.state.user} tasks={this.state.tasks}/>
                < ActiveTask />
                < ActiveTimers />
            </div>
        )
    }
}