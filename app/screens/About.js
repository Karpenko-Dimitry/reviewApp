import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Icon } from 'react-native-eva-icons';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text>About screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    icon: {

    }
});
