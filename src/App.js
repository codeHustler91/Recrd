import React, { Component } from 'react'
import './styles.css'
import ActiveTaskContainer from './Components/ActiveTaskContainer'
import ActiveTimerContainer from './Components/ActiveTimerContainer'
import TaskListContainer from './Components/TaskListContainer';
import SplashContainer from './Components/SplashContainer';
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
    editActiveTask = (event) => {
        let edits = {...this.state.activeTask, [event.target.name]: event.target.value}
        this.setState({
            activeTask: edits
        })
    }
    setActiveTask = (taskId) => {
        const task = this.state.profile.data.attributes.tasks.filter(task => {
            return task.id === taskId })
        const attempts = this.state.profile.data.attributes.attempts.filter( attempt => {
            return attempt.task_id === taskId })
        this.setState({
            activeTask: task[0],
            activeAttempts: attempts
        })
    }
    setActiveAttempt = (attemptResponse) => {
        return attemptResponse.task_id === this.state.activeTask.id 
            ? this.setState({
                activeAttempts: [...this.state.activeAttempts, attemptResponse]
                })
            : null
    }
    getProfileAndSetActiveTask = (profileId, taskId) => {
        this.getProfile(profileId)
        this.setActiveTask(taskId)
        console.log('asynchronus mess')
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
    getProfile = (id) => {
        fetch(`https://recrd-rails-backend.herokuapp.com/users/${id}`)
            .then(resp => resp.json())
            .then(this.setProfile)
    }
    setProfile = (profile) => {
        this.setState({
            profile: profile, 
            loggedIn: true
        })
    }
    logout = () => {
        this.setState({
            profile: {},
            loggedIn: false,
            activeTask: {},
            activeAttempts: [],
            timers: []
        })
    }

    main = () => {
        return(
            <div id='main-container'>
                <Header 
                    isLoggedIn={this.state.loggedIn}
                    logout={this.logout}
                />
                {this.ifLoggedIn()}
            </div>
        )
    }
    ifLoggedIn = () => {
        return this.state.loggedIn
            ? (<main className='sub-container'>
                < TaskListContainer
                    profile={this.state.profile} 
                    getProfile={this.getProfile} 
                    getProfileAndSetActiveTask={this.getProfileAndSetActiveTask} />
                < ActiveTaskContainer
                    profile={this.state.profile} 
                    getProfile={this.getProfile}
                    addTimer={this.addTimer}
                    editActiveTask={this.editActiveTask}
                    activeTask={this.state.activeTask} 
                    activeAttempts={this.state.activeAttempts} />
                < ActiveTimerContainer
                    timers={this.state.timers}
                    setActiveAttempt={this.setActiveAttempt} />
            </main>)
            :   <SplashContainer
                    setProfile={this.setProfile}
                    getProfile={this.getProfile}
                    isLoggedIn={this.state.loggedIn} />
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path='/' 
                        render={ (props) => 
                            <SplashContainer 
                                {...props} 
                                setProfile={this.setProfile}
                                getProfile={this.getProfile}
                                isLoggedIn={this.state.loggedIn}
                            />}
                    />
                    <Route path='/main' render={ this.main } />
                    <Route path='/settings' 
                        render={ (props) => 
                            <Settings
                                {...props}
                                setProfile={this.setProfile}
                                profile={this.state.profile} 
                            />}
                    />
                    <Route component={ AppNotFound }/>
                </Switch>
            </Router>
        )
    }
}