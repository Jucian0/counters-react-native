import React, { FunctionComponent } from 'react'
import { Container, CounterName, Number, Display } from "./styles"
import { Counter as CounterType } from '../../../Store/Reducers'
import Control from '../Control'

interface CounterProps {
    selected: boolean
    counter: CounterType
}

const Counter: FunctionComponent<CounterProps> = ({ selected, counter }) => {

    return (
        <Container selected={selected}>
            <Display align="flex-start">
                <CounterName>{counter.title}</CounterName>
            </Display>
            <Display align="flex-end">
                <Number>{counter.value}</Number>
            </Display>
            {
                !!selected &&
                <Display align="flex-end">
                    <Control selected={counter.id} />
                </Display>
            }
        </Container>
    )
}

export default Counter