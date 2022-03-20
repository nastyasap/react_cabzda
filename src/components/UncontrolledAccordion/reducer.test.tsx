import {reducer, StateType, TOGGLE_CONST} from "./reducer";

test('reducer should change value to opposite', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONST})
    //expection
    expect(newState.collapsed).toBe(true)
})