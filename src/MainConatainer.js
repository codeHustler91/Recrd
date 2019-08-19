import React, { Component } from 'react'
import ActiveTask from './Components/ActiveTask'
import ActiveTimers from './Components/ActiveTimers'
import TaskListContainer from './Components/TaskListContainer';
import Login from './Components/Login';

export default class MainContainer extends Component {

    state = {
        profile: {}
    }

    login = (id) => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(resp => resp.json())
            .then(profile => this.setState({ profile }))
    }

    render() {
        return(
            <div id='main-container'>
                < TaskListContainer profile={this.state.profile} />
                < ActiveTask />
                < ActiveTimers />
                < Login login={this.login} />
            </div>
        )
    }
}