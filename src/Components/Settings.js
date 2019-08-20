import React, { Component } from 'react'

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

    render() {
        return(
            <div className='splash'>
                <h2>RECRD</h2>
                <form >
                    <input type='text' placeholder='enter name here' name='name' onChange={this.setInput}></input>
                    <select id='theme-select' onChange={this.setInput} name='theme'>
                        <option value='dark' >Dark</option>
                        <option value='light' >Light</option>
                        <option value='light' >Aqua</option>
                        <option value='light' >Autumn</option>
                    </select>
                    <button type='submit'>Update User</button>
                </form>
            </div>
        )
    }
}