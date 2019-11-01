import React, { FunctionComponent } from 'react';
import Counter from "../Counter";
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../../Store';
import { counters as countersActions, Counter as CounterType } from '../../../Store/Reducers';
import { TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../Components/Header';
import { Container, Row, Col, TextButton } from '../../../../styles';
import { Button } from './styles';
import { Actions } from 'react-native-router-flux';


const List: FunctionComponent = () => {
    const { actions } = countersActions;
    const counters = useSelector<ApplicationState, Array<CounterType>>(state => state.counters.counters);
    const selected = useSelector<ApplicationState, string>(state => state.counters.selected);
    const dispatch = useDispatch()

    const setSelected = (id: string) =>
        dispatch(actions.setSelected(id))


    return (
        <Container>
            <Row height="20%">
                <Header>{"Counters List"}</Header>
            </Row>
            <Row height="80%">
                <ScrollView>
                    {counters.length > 0 ?
                        counters.map(counter => (
                            <TouchableOpacity
                                key={counter.id}
                                onPress={() => setSelected(counter.id)}
                                disabled={counter.id === selected}>
                                <Counter
                                    selected={counter.id === selected}
                                    counter={counter}
                                />
                            </TouchableOpacity>
                        )) :
                        <Col>
                            <Button onPress={() => Actions.config()}>
                                <TextButton>{"Add Counter"}</TextButton>
                            </Button>
                        </Col>
                    }
                </ScrollView>
            </Row>
        </Container>
    )
}

export default List;