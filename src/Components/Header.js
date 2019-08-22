import React from 'react'

export default function Header (props) {

    return (
        <header>
            <h1>RECRD</h1>
            <h3>{props.isLoggedIn ? 'User Settings' : 'go to home path /'}</h3>
        </header>
    )
}