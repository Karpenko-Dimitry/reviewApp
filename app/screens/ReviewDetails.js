import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Detailes({ route, navigation }) {
    const { title, rating, body } = route.params;
    const pressHandler = () => {
        navigation.goBack();
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{title}</Text>
            <Text style={globalStyles.titleText}>{body}</Text>
            <Text style={globalStyles.titleText}>{rating}</Text>
            <Button title="Back home" onPress={pressHandler} />
        </View>
    );
}
