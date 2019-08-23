import React from 'react'

export default function Metric (props) {

    const attemptDurations = () => props.attempts.map(attempt => {
            return attempt.duration
    })
    const averageTime = () => {
        return (attemptDurations().reduce((a, b) => a + b, 0) / attemptDurations().length)
    }
    const minTime = () => {
        return Math.min(...attemptDurations())
    }
    const maxTime = () => {
        return Math.max(...attemptDurations())
    }
    const sumTime = () => {
        return (attemptDurations().reduce((a, b) => a + b, 0))
    }
    const conditionalMetric = () => {
        return attemptDurations().length >= 3
            ?   <ul>
                    <li className='new-item'>Average Time: {averageTime().toFixed(2)} seconds</li>
                    <li className='new-item'>Total Time: {sumTime()} seconds</li>
                    <li className='new-item'>Longest Time: {maxTime()} seconds</li>
                    <li className='new-item'>Shortest Time: {minTime()} seconds</li>
                </ul>
            :   <ul>
                    <li>Add {3 - attemptDurations().length} more time splits to see metrics</li>
                </ul>
    }
    return (
        <aside className='metric'>
            <h1>Metrics</h1>
            <p>{conditionalMetric()}</p>
        </aside>
    )
}