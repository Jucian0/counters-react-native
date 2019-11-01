import React, { useEffect, FunctionComponent } from 'react';
import Routes from './src/Routes';
import { AppStyles, RouterContainer } from './styles';
import * as Font from 'expo-font';
import MenuTabs from './src/Components/MenuTabs';
import Header from './src/Components/Header';
import store from './src/Store';
import {Provider} from 'react-redux'


const App: FunctionComponent = () => {

    useEffect(() => {
        Font.loadAsync({
            'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
            'Roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'Roboto-light': require('./assets/fonts/Roboto-Light.ttf')
        })
    }, []);

    return (
        <AppStyles>
            <Provider store={store}>
                <RouterContainer>
                    <Routes />
                </RouterContainer>
                <MenuTabs />
            </Provider>
        </AppStyles>
    )
};

export default App;

