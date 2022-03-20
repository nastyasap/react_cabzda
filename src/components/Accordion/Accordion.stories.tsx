import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,

};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const onClick = action('Some item wants to change')
const callback = action('Accordion mode changes')

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    titleValue: 'Menu',
    collapsedValue: false,
    items: [{title: 'Nastya', value: 1}, {title: 'Vlad', value: 2}, {title: 'Ted', value: 3}]
}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: 'Menu',
    collapsedValue: true,
    setCollapsedValue: (() => {
    }),
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    const callback = () => setValue(!value)

    return <Accordion titleValue={'Menu'}
                      collapsedValue={value}
                      setCollapsedValue={callback}
                      onClick={onClick}
                      items={
                          [
                              {title: 'Nastya', value: 1},
                              {title: 'Vlad', value: 2},
                              {title: 'Ted', value: 3}
                          ]}/>

}


