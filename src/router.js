import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './pages/home'
import Detail from './pages/detail'
import Detail2 from './pages/detail2'
import Detail3 from './pages/detail3'
import Detail4 from './pages/detail4'
import Detail5 from './pages/detail5'
import Detail6 from './pages/detail6'

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                />
                <Stack.Screen
                name="Detail2"
                component={Detail2}
                />
                <Stack.Screen
                name="Detail3"
                component={Detail3}
                />
                <Stack.Screen
                name="Detail4"
                component={Detail4}
                />
                <Stack.Screen
                name="Detail5"
                component={Detail5}
                />
                <Stack.Screen
                name="Detail6"
                component={Detail6}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;