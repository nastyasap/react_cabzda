import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

export function UncontrolledRating() {
    let [selected, setSelected] = useState(0)

    const onClickStarHandler = (value: RatingValueType) => {
        setSelected(value)
    }

    return (
        <div>
            <Star isActive={selected > 0} value={1} onClickStarHandler={onClickStarHandler}/>
            <Star isActive={selected > 1} value={2} onClickStarHandler={onClickStarHandler}/>
            <Star isActive={selected > 2} value={3} onClickStarHandler={onClickStarHandler}/>
            <Star isActive={selected > 3} value={4} onClickStarHandler={onClickStarHandler}/>
            <Star isActive={selected > 4} value={5} onClickStarHandler={onClickStarHandler}/>
            {/*<button onClick={() => setSelected(5)}>5</button>*/}
        </div>
    );

}

type StarPropsType = {
    isActive: boolean
    onClickStarHandler: (value:RatingValueType) => void
    value: RatingValueType

};

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.onClickStarHandler(props.value)}>
                {props.isActive ? <b>star </b> : 'star '}
            </span>
    )
    /*if (props.isActive) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/
}
