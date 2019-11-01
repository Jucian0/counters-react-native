import React, { FunctionComponent } from 'react';
import { Menu, Button } from './styles';
import { Ionicons } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux';

const MenuTabs: FunctionComponent = () => {

    return (
        <Menu>
            <Button onPress={() => Actions.listCounter()}>
                <Ionicons name="md-list" size={32} color="white" />
            </Button>
            <Button onPress={() => Actions.config()}>
                <Ionicons name="md-cog" size={32} color="white" />
            </Button>
        </Menu>
    )
}

export default MenuTabs;