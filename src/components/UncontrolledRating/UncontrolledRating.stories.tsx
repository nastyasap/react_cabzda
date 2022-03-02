import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,

};
const callback = action('on or off changed')

export const ModeChanging = () => {
    return <UncontrolledRating/>
}
