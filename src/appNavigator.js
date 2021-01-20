import React, { Component } from "react";
import {
    Easing, Animated, View, Text, Platform
} from "react-native";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import HomeView from "./homeView";
import Spring from "./spring";
import Interpolate from "./interpolate";


enableScreens();

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
    },
};

const AppNavigator = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                initialRouteName={'Interpolate'}
                headerMode={'none'}
                mode={'modal'}
                screenOptions={{
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            >
                <Stack.Screen name="Home" component={HomeView} />
                <Stack.Screen name="Spring" component={Spring} />
                <Stack.Screen name="Interpolate" component={Interpolate} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;