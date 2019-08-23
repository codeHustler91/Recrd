import React from 'react'

export default function Metric (props) {

    let attemptDurations = () => {
        return props.attempts.map(attempt => {
            return attempt.duration
        })
    }

    const averageTime = () => {
        console.log(attemptDurations())
        return (attemptDurations().reduce((a, b) => a + b, 0) / attemptDurations.length)
    }
    const minTime = () => {
        return Math.min(...attemptDurations())
    }
    const maxTime = () => {
        return Math.max(...attemptDurations())
    }
    const conditionalMetric = () => {
        console.log(attemptDurations())
        return attemptDurations().length >= 3
            ?   `Average Time: ${averageTime()}seconds\nShortest Time: ${minTime()}seconds\nLongest Time: ${maxTime()}`
            :   `Add ${3 - attemptDurations()} more times to see the average`
    }
    return (
        <aside className='component-list'>
            <h1>Metrics</h1>
            <h3>{conditionalMetric()}</h3>
        </aside>
    )
}