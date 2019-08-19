import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        profiles: [],
        name: ''
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/`)
            .then(resp => resp.json())
            .then(profiles => this.setState({ profiles }))
    }

    filterUser = (event) => {
        event.preventDefault()
        const user = this.state.profiles.filter( profile => {
            console.log(event.target)
            return profile.name.toLowerCase() === this.state.name.toLowerCase()
        })
        this.props.login(user.id)
        event.target.reset()
    }

    setInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div id='login'>
                <form onSubmit={this.filterUser}>
                    <input type='text' placeholder='enter name here' name='name' onChange={this.showInput}></input>
                    <button type='submit'>Find User</button>
                </form>
            </div>
        )
    }
}