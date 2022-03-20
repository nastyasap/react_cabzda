import React, {ChangeEvent, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input',
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>

}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>

}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>None</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
    </select>

}

