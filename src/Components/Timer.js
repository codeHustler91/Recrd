import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        time: 0
    }

    render() {
        return (
            <p>Timer Goes Here!!!! {this.state.time}</p>
        )
    }
}