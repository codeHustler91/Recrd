import React from 'react'
import Timer from './Timer'

export default function ActiveTimer() {

    return(
        <div>
            <h1>Active Timers</h1>
            < Timer title={'Walk the dog'}/>
            < Timer title={'Walk to School'}/>
            < Timer title={'Project Planning'}/>
        </div>
    )
}