import { createStore, applyMiddleware } from 'redux'
import { CountersState } from './Reducers'
import AppReducer, { INITIAL_STATE as counters } from './Reducers/index'

import devToolsEnhancer from 'remote-redux-devtools'

export interface ApplicationState {
    counters: CountersState
}

const initialStateApp: ApplicationState = {
    counters,
}

const configureStore = (preloadedState: ApplicationState) =>
    createStore(
        AppReducer,
        preloadedState,
        devToolsEnhancer(
            applyMiddleware()
        )
    )

const store = configureStore(initialStateApp)

export default store
