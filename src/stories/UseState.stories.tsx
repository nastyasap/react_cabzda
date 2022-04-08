import {useEffect, useMemo, useState} from "react";

export default {
    title: 'useState'
}

export const UseStateExample = () => {
    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}


export const UseEffectExample = () => {
    const [date, setDate] = useState<Date>(new Date())
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let clock = (hours < 10 ? ('0' + hours) : hours) + ':'
        + (minutes < 10 ? ('0' + minutes) : minutes) + ':'
        + (seconds < 10 ? ('0' + seconds) : seconds)

    useEffect(() => {
            setInterval(() => setDate(new Date()), 1000)
        }, [date]
    )

    return <>
        {clock}
    </>
}
