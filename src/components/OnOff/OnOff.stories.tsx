import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,

};
const callback = action('on or off changed')

export const OnMode = () => <OnOff onValue={true} setOnValue={callback}/>
export const OffMode = () => <OnOff onValue={false} setOnValue={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff onValue={value} setOnValue={setValue}/>
}
