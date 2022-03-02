import React from "react";

type AccordionPropsType = {
    titleValue: string,
    setCollapsedValue: () => void
    collapsedValue: boolean
};

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.setCollapsedValue}/>
            {!props.collapsedValue && <AccordionBody/>}
        </div>
    );

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onClick()}>{props.title}</h3>
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

export default Accordion;