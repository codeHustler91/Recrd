import React, { Component } from 'react'
import './styles.css'
import ActiveTask from './Components/ActiveTask'
import ActiveTimers from './Components/ActiveTimers'
import TaskListContainer from './Components/TaskListContainer';
import Login from './Components/Login';
import Settings from './Components/Settings';
import Header from './Components/Header';
import AppNotFound from './Components/AppNotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class MainContainer extends Component {

    state = {
        profile: [],
        loggedIn: false
    }

    login = (id) => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(resp => resp.json())
            .then(profile => this.setState({ profile, loggedIn: true }))
    }

    main = () => {
        return(
            <div id='main-container'>
                <Header />
                <main className='sub-container'>
                    < TaskListContainer profile={this.state.profile} />
                    < ActiveTask profile={this.state.profile}/>
                    < ActiveTimers />
                </main>
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