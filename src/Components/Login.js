import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    state = {
        profiles: [],
        name: '',
        loggedIn: false
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/`)
            .then(resp => resp.json())
            .then(profiles => this.setState({ profiles }))
    }

    filterUser = (event) => {
        event.preventDefault()
        const user = this.state.profiles.filter( profile => {
            return profile.name.toLowerCase() === this.state.name.toLowerCase()
        })
        event.target.reset()
        if (user[0].id) {
            this.setState({ loggedIn: true })
            this.props.login(user[0].id)
        } else {
            return <Redirect to='/' />
        }
    }

    setInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if ( this.state.loggedIn === true ) {
            return <Redirect to='/main' />
        }
        return(
            <div className='splash'>
                <h2>RECRD</h2>
                <form onSubmit={this.filterUser}>
                    <input type='text' placeholder='enter name here' name='name' onChange={this.setInput}></input>
                    <button type='submit'>Find User</button>
                </form>
            </div>
        )
    }
}