const SET_COUNT = "SET_COUNT"

const defaultState = {
    items: [],
    isFetching: true,
    count: 0
}


export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}

export const setCount = (count) => ({type:SET_COUNT, payload:count})