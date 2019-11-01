import React, { FunctionComponent } from 'react'
import { Container, Button } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { counters } from '../../../Store/Reducers'

interface ControlProps{
    selected:string
}

const Control: FunctionComponent<ControlProps> = ({selected}) => {
    const {actions} = counters

    const dispatch = useDispatch()

    return (
        <Container>
            <Button onPress={()=>dispatch(actions.increment(selected))}>
                <Ionicons name="md-add" size={32} color="white" />
            </Button>
            <Button onPress={()=>dispatch(actions.reset(selected))}>
                <Ionicons name="md-refresh" size={32} color="white" />
            </Button>        
            <Button onPress={()=>dispatch(actions.decrement(selected))}>
                <Ionicons name="md-remove" size={32} color="white" />
            </Button>
        </Container>
    )
}

export default Control