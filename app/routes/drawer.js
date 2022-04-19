import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, ç } from "@react-navigation/native";

import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import Header from "../shared/header";

const Drower = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Drower.Navigator
                screenOptions={{
                    // headerStyle: { backgroundColor: 'coral' },
                    // headerTintColor: 'white',
                    header: ({ navigation, route, options }) => {
                        return (<Header navigation={navigation} route={route} options={options} />)
                    }
                }}
                initialRouteName="Home">
                <Drower.Screen name="Home" component={HomeStack} />
                <Drower.Screen name="Abount" component={AboutStack} />
            </Drower.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;