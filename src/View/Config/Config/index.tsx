import React, { FunctionComponent, useState } from 'react'
import { Button, CounterText, Buttons, TextInput} from "./styles"
import Counter from "../../Counters/Counter"
import { useSelector, useDispatch } from 'react-redux'
import { counters, Counter as CounterType } from "../../../Store/Reducers"
import { ApplicationState } from '../../../Store'
import { Actions } from 'react-native-router-flux'
import { TouchableOpacity } from 'react-native'
import Header from '../../../Components/Header'
import { Container, Row, Col, TextButton } from '../../../../styles'


const Config: FunctionComponent = () => {
    const [edit, setEdit] = useState<CounterType>({})
    const { actions } = counters
    const counter = useSelector<ApplicationState, CounterType>(
        state => state.counters.counters.find(
            counter => counter.id === state.counters.selected)
    )

    const dispatch = useDispatch()


    const deleteAndRedirect = () => {
        dispatch(actions.removeCounter(counter.id))
        Actions.pop()
    }

    const save = () => {
        if (edit.id) {
            dispatch(actions.editCounter({ ...edit }))
        } else {
            dispatch(actions.addCounter({
                id: Math.floor(Math.random() * 1000).toString(),
                value: 0,
                title: edit.title
            }))
        }

        setEdit({})
    }

    return (
        <Container>
            <Row height="20%">
                <Header>{"Config"}</Header>
            </Row>
            <Row height="20%">
                <Col>
                    <TextInput
                        onChangeText={e => setEdit({ ...edit, title: e })}
                        value={edit.title} />
                </Col>
            </Row>
            <Row height="10%">
                <Col>
                    <Buttons>
                        <Button onPress={save} disabled={!edit.title}>
                            <TextButton>{"Save Counter"}</TextButton>
                        </Button>
                        <Button onPress={() => deleteAndRedirect()} disabled={!counter}>
                            <TextButton>{"Remove Counter"}</TextButton>
                        </Button>
                    </Buttons>
                </Col>
            </Row>
            <Row height="5%">
                <Col>
                    <CounterText>Counter Selected</CounterText>
                </Col>
            </Row>
            <Row height="45%">
                {
                    counter &&
                    <TouchableOpacity onPress={() => setEdit(counter)} style={{ width: '100%' }}>
                        <Counter selected={false} counter={counter} />
                    </TouchableOpacity>
                }
            </Row>
        </Container>
    )
}

export default Config