import List from '../View/Counters/List'
import Config from '../View/Config/Config'
import {Router, Stack, Scene} from 'react-native-router-flux'
import React from 'react'


const Routes = () => (
   <Router >
      <Stack key="root" >
         <Scene key="listCounter" component={List} title="Counters" hideNavBar/>
         <Scene key="config" component={Config} title="Config" hideNavBar/>
      </Stack>
   </Router>
)

export default Routes

