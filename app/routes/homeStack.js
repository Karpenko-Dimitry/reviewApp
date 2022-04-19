import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: 'coral'},
                headerTintColor: 'white',
                headerShown: false
            }}>
            <Stack.Screen name="HomeStack" component={Home} options={{ title: 'GameZone' }} />
            <Stack.Screen name="Detailes" component={ReviewDetails} />
        </Stack.Navigator>
    );
}
