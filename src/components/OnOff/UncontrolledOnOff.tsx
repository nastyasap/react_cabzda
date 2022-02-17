import {useState} from "react";

type OnOffType = {
   /* on: boolean*/
}

export const UncontrolledOnOff = (props: OnOffType) => {
    let [on,setOn] = useState(false)
/*    function clickOn (value:boolean){
        setOn(value)
    }*/

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        marginRight: '5px',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '2px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '20px',
        border: '2px solid black',
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor: on ? 'green' : 'red',
        display: 'inline-block'
    }

    return <div>
        <div style={onStyle} onClick={()=>setOn(true)} >On</div>
        <div style={offStyle} onClick={()=>setOn(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}