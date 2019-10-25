import React from 'react'
import { Link } from 'react-router-dom'

export default function Header (props) {

    const logout = () => {
        props.logout()
    }

    const conditionalLink = () => {
        return props.isLoggedIn
            ?   <div className='horizontal-row'>
                    <Link to="/settings">
                        <h3>User Settings</h3>
                    </Link>
                    <a><h3 onClick={logout}>Logout</h3></a>
                </div>
            :   <Link to="/">
                    <h3>go to home path /</h3>
                </Link>
    }
    return (
        <header>
            <h1>RECRD</h1>
            {conditionalLink()}
        </header>
    )
}