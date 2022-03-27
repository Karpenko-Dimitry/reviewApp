import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: 'coral' },
                    headerTintColor: 'white',
                }}>
                <Stack.Screen name="Home" component={Home} options={{ title: 'GameZone' }} />
                <Stack.Screen name="Detailes" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
