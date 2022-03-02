import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {OnOff} from "./OnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,

};

const callback = action('on or off changed')

export const OnMode = () => <UncontrolledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultValue={false} onChange={callback}/>
