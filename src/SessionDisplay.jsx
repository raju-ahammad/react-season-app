import './seasonDisplay.css'
import React from 'react'

const seasonConfig =  {
    summer: {
        text: "Lest's hit the bitch",
        iconName: "sun"
    },
    winter: {
        text: "Bur its Cold",
        iconName: "snowflake"
    } 
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer': 'winter'; 
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}



const SessionDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className= { `icon-left massive ${iconName} icon` } />
            <h1 className="text-primary">{ text }</h1>
            <i className ={ `icon-right massive ${iconName} icon` } />
        </div>
    )
}

export default SessionDisplay
