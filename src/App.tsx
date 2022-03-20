import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsedValue, setCollapsedValue] = useState<boolean>(false)
    let [onValue, setOnValue] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={"This is App component"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Test'}/>
            <Accordion titleValue={'Menu'}
                       collapsedValue={collapsedValue}
                       onClick={() => {
                       }}
                       setCollapsedValue={() => setCollapsedValue(!collapsedValue)}
                       items={[{title: '1', value: 1}, {title: '2', value: 2}]}/>
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            Article 2
            {/*<UncontrolledOnOff/>*/}
            <OnOff onValue={onValue} setOnValue={setOnValue}/>
        </div>
    );
}

type PageTitleProps = {
    title: string
};

function PageTitle(props: PageTitleProps) {
    return <h1>{props.title}</h1>
}


export default App;
