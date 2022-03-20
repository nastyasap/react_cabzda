import React, {useReducer} from "react";
import {reducer, TOGGLE_CONST} from "./reducer";

type AccordionPropsType = {
    titleValue: string
};

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Select rendering')
    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})


    return (
        <div>
            <AccordionTitle title={props.titleValue} toggleCollapsed={() => dispatch({type: TOGGLE_CONST})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    toggleCollapsed: () => void
};

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.toggleCollapsed()}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;