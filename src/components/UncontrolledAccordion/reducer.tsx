type ActionType = {
    type: 'TOGGLE-COLLAPSED'
}

export const TOGGLE_CONST = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === TOGGLE_CONST) {
        return {
            ...state,
            collapsed: !state.collapsed
        }
    }
    return state
}