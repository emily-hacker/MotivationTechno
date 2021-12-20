

import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EcranSelection from '../pages/ecranSelection/EcranSelection';
import EcranQuestion from '../pages/ecranQuestion/EcranQuestion';
import EcranReponses from '../pages/ecranReponses/EcranReponses';





const Stack = createNativeStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#485063' } }}>

            <Stack.Screen name="Menu Principale" component={EcranSelection} />
            <Stack.Screen name="Retour au Menu" component={EcranQuestion} />
            <Stack.Screen name="Reponses" component={EcranReponses} />
        </Stack.Navigator>

    );
}

export default StackNav;