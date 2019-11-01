import React, { FunctionComponent, useEffect } from 'react';
import { Container, CounterName, Number, Display } from "./styles";
import { Counter as CounterType } from '../../../Store/Reducers';
import Control from '../Control';
import { Animated } from 'react-native';

interface CounterProps {
    selected: boolean;
    counter: CounterType
}

const Counter: FunctionComponent<CounterProps> = ({ selected, counter }) => {

    useEffect(()=>{

        if(!!selected){
            new Animated.Value(500)
        }

    },[selected])

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

export default Counter;