import React, {useState, KeyboardEvent, useEffect} from "react";
import {ItemType} from "../Accordion/Accordion";
import s from './Select.module.css'

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]

};

function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === props.value) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false)
        }
    }

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    return (
        <div>
            <div className={s.select + ' ' + (active ? s.active : '')}
                 onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={s.items}>
                    {props.items.map(it =>
                        <div className={s.item + ' ' + (hoveredItem === it ? s.selected : '')}
                             onMouseEnter={() => setHoveredElementValue(it.value)}
                             onClick={() => onItemClick(it.value)}
                             key={it.value}
                        >
                            {it.title}
                        </div>)}
                </div>}
            </div>

        </div>

    );

}


export default Select;