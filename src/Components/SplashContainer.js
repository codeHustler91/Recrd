import React from 'react'
import Login from './Login'
import Register from './Register'

export default function SplashContainer(props) {


    return(
        <div className='splash-container'>
            <h2>RECRD</h2>
            <div className='horizontal-row'>
                < Register getProfile={props.getProfile} 
                    isLoggedIn={props.isLoggedIn}/>
                < Login getProfile={props.getProfile}/>
            </div>
        </div>
    )
}