import React from 'react'
import { Link } from 'react-router-dom'

export default function Header (props) {

    return (
        <header>
            <h1>RECRD</h1>
            <Link to="/settings">
                <h3>
                    {props.isLoggedIn ? 'User Settings' : 'go to home path /'}
                </h3>
            </Link>
        </header>
    )
}