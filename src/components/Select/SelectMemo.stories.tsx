import React, {ChangeEvent, useMemo, useState} from 'react';
import Select, {SelectPropsType} from "./Select";
import {actions} from "@storybook/addon-actions";


export default {
    title: 'TestSelectMemo',
};


export const SelectMemo = () => {
    const [count, setCount] = useState(0)
    let cities = [
        {title: 'Minsk', countryId: 1, population: 10},
        {title: 'Bobruisk', countryId: 1, population: 0.1},
        {title: 'Gomel', countryId: 1, population: 1},
        {title: 'Moscow', countryId: 2, population: 100},
        {title: 'Yfa', countryId: 2, population: 2},
        {title: 'Sochi', countryId: 2, population: 0.5},
        {title: 'Tokio', countryId: 3, population: 20},
        {title: 'Pekin', countryId: 3, population: 10},
        {title: 'Seyl', countryId: 3, population: 3},
    ]
    const CitiesArr = useMemo(() => {
        const CitiesArr = cities.filter(city => city.countryId === 1)
        return CitiesArr
    }, [cities])

    return <>

        <button onClick={() => setCount(count + 1)}>+</button>
        {count}

    </>

}



