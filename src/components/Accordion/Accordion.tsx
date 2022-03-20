import React from "react";

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    setCollapsedValue: () => void
    collapsedValue: boolean
    items: ItemType[]
    onClick: (value: any) => void

};

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.setCollapsedValue}/>
            {!props.collapsedValue && <AccordionBody onClick={props.onClick} items={props.items}/>}
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

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
};

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((it, index) => <li onClick={() => {
                props.onClick(it.value)
            }} key={index}>{it.title}</li>)}
        </ul>
    );
}

export default Accordion;