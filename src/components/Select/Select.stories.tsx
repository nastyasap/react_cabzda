import React, {ChangeEvent, useState} from 'react';
import Select, {SelectPropsType} from "./Select";
import {actions} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,

};

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

export const WithValueSelect = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Kiev'},
                {value: '3', title: 'Moscow'},
            ]}/>
    </>
}

export const WithoutValueSelect = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Kiev'},
                {value: '3', title: 'Moscow'},
            ]}/>
    </>
}


