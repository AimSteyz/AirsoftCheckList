import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./HomePage/Homepage";
import Preset from "./PresetPage/PresetPage";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // screenOptions={{
                    // headerShown: false,
                    // navigationBarHidden: true,
                // }}
                >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Preset" component={Preset} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;