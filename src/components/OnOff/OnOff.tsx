import React from "react";

type OnOffType = {
    onValue: boolean
    setOnValue: (onValue: boolean) => void
}

export const OnOffSecret = (props: OnOffType) => {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        marginRight: '5px',
        backgroundColor: props.onValue ? 'green' : 'white',
        display: 'inline-block'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        marginLeft: '5px',
        backgroundColor: props.onValue ? 'white' : 'red',
        display: 'inline-block'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '20px',
        border: '2px solid black',
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor: props.onValue ? 'green' : 'red',
        display: 'inline-block'
    }

    return <div>
        <div style={onStyle} onClick={() => props.setOnValue(true)}>On</div>
        <div style={offStyle} onClick={() => props.setOnValue(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export const OnOff = React.memo(OnOffSecret)