import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Settings extends Component {

    state = {
        name: '',
        theme: ''
    }

    setInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateUser = (event) => {
        event.preventDefault()
        const url = `https://recrd-rails-backend.herokuapp.com/users/${this.props.profile.data.id}`
        const data = {
            name: this.state.name,
            theme: this.state.theme
        }
        event.target.reset()
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
        }})
    }

    render() {
        return(
            <div className='splash-component'>
                <h2>RECRD</h2>
                <h3>{this.props.profile.data.attributes.name}</h3>
                <form onSubmit={this.updateUser}>
                    <input type='text' placeholder='change name here' name='name' onChange={this.setInput}></input>
                    <select id='theme-select' onChange={this.setInput} name='theme'>
                        <option value='default' >Choose Theme</option>
                        <option value='dark' >Dark</option>
                        <option value='light' >Light- Coming Soon!</option>
                        <option value='aqua' >Aqua- Coming Soon!</option>
                    </select>
                    <button type='submit'>Update User</button>
                    <Link to="/main">
                        <button>
                            Go Back
                        </button>
                     </Link>
                </form>
            </div>
        )
    }
}