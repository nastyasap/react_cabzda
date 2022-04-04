import React from "react";

export type ItemType = {
    title: string
    value: any
    countryId ?: number
    population ?: number
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

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
};

const AccordionBody = React.memo(AccordionBodySecret)
const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((it, index) => <li onClick={() => {
                props.onClick(it.value)
            }} key={index}>{it.title}</li>)}
        </ul>
    );
}

export default Accordion;