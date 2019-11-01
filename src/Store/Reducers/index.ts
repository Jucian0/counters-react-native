import { createSlice, combineReducers, AnyAction } from 'redux-starter-kit'

export interface Counter {
    value?: number
    title?: string
    id?: string
}

export interface CountersState {
    counter: Counter
    counters: Array<Counter>
    selected: string
}

export const INITIAL_STATE: CountersState = {
    counter: {},
    counters: [],
    selected: ''
}

const addCounter = (state: CountersState, action: AnyAction) => ({
    ...state,
    counters: [...state.counters, action.payload],
    selected: action.payload.id
})

const editCounter = (state: CountersState, action: AnyAction) => ({
    ...state,
    counters: state.counters.map(counter => counter.id === action.payload.id ? ({
        ...action.payload
    }) : counter)
})

const removeCounter = (state: CountersState, action: AnyAction) => ({
    ...state,
    counters: state.counters.filter(counter => counter.id !== action.payload),
})

const setSelected = (state: CountersState, action: AnyAction) => ({
    ...state,
    selected: state.counters.find(counter => counter.id === action.payload).id
})

const increment = (state: CountersState, action: AnyAction) => ({
    ...state,
    counters: state.counters.map(counter => counter.id === action.payload ? ({
        ...counter,
        value: counter.value + 1
    }) : counter)
})

const decrement = (state: CountersState, action: AnyAction) => ({
    ...state,
    counters: state.counters.map(counter => counter.id === action.payload ? ({
        ...counter,
        value: counter.value - 1
    }) : counter)
})

const reset = (state: CountersState, action: AnyAction) => ({
    ...state,
    counters: state.counters.map(counter => counter.id === action.payload ? ({
        ...counter,
        value: 0
    }) : counter)
})

export const counters = createSlice({
    name: 'counters',
    initialState: INITIAL_STATE,
    reducers: {
        addCounter,
        editCounter,
        removeCounter,
        setSelected,
        increment,
        decrement,
        reset
    }
})


const AppReducer = combineReducers({
    counters: counters.reducer
})

export default AppReducer