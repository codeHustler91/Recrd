import React, { Component } from 'react'
import './styles.css'
import ActiveTaskContainer from './Components/ActiveTaskContainer'
import ActiveTimerContainer from './Components/ActiveTimerContainer'
import TaskListContainer from './Components/TaskListContainer';
import Login from './Components/Login';
import Settings from './Components/Settings';
import Header from './Components/Header';
import AppNotFound from './Components/AppNotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends Component {

    state = {
        profile: {},
        loggedIn: false,
        activeTask: {},
        activeAttempts: [],
        timers: []
    }
    setActiveTask = (task) => {
        const attempts = this.state.profile.data.attributes.attempts.filter( attempt => {
            return attempt.task_id === task.id })
        console.log('attempts', attempts)
        this.setState({
            activeTask: task,
            activeAttempts: attempts
        })
    }
    addTimer = () => {
        const timerTask = {
            taskId: this.state.activeTask.id,
            title: this.state.activeTask.title
            }
        this.setState({
            timers: [...this.state.timers, timerTask]
        })
    }

    login = (id) => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(resp => resp.json())
            .then(profile => this.setState({ profile, loggedIn: true }))
    }
    ifLoggedIn = () => {
        return this.state.loggedIn === true
            ? (<main className='sub-container'>
                < TaskListContainer 
                    profile={this.state.profile} 
                    setActiveTask={this.setActiveTask}/>
                < ActiveTaskContainer 
                    profile={this.state.profile} 
                    addTimer={this.addTimer}
                    activeTask={this.state.activeTask} 
                    activeAttempts={this.state.activeAttempts} />
                < ActiveTimerContainer 
                    timers={this.state.timers}/>
            </main>)
            : null
    }

    main = () => {
        return(
            <div id='main-container'>
                <Header isLoggedIn={this.state.loggedIn}/>
                {this.ifLoggedIn()}
            </div>
        )
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path='/' render={ (props) => <Login {...props} login={this.login} />}/>
                    <Route path='/main' render={ this.main } />
                    <Route path='/settings' component={ Settings } />
                    <Route component={ AppNotFound }/>
                </Switch>
            </Router>
        )
    }
}