import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,

};
const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsedValue={true} setCollapsedValue={callback}/>
export const UncollapsedMode = () => <Accordion titleValue={'Users'} collapsedValue={false} setCollapsedValue={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsedValue={value} setCollapsedValue={() => setValue(!value)}/>
}
