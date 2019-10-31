import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Register extends Component {

    state = {
        name: '',
        theme: ''
    } 

    setInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    createUser = (event) => {
        event.preventDefault()
        const url = 'https://recrd-rails-backend.herokuapp.com/users'
        const data = {
            name: this.state.name,
            theme: this.state.theme
        }
        event.target.reset()
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
        }})
        .then(resp => resp.json())
        .then(resp => this.props.setProfile(resp))
    }

    render () {
        if ( this.props.isLoggedIn === true ) {
            return <Redirect to='/main' />
        }
        return(
            <div className='splash-component'>
                <h3>Register</h3>
                <form onSubmit={this.createUser}>
                    <input type='text' 
                        placeholder='enter name here' 
                        name='name' 
                        onChange={this.setInput}>
                    </input>
                    <select onChange={this.setInput} name='theme'>
                        <option value='default' >Choose Theme</option>
                        <option value='dark' >Dark</option>
                        <option value='light' >Light- Coming Soon!</option>
                        <option value='Aqua' >Aqua- Coming Soon!</option>
                    </select>
                    <button type='submit'>Create User</button>
                </form>
            </div>
        )
    }
}