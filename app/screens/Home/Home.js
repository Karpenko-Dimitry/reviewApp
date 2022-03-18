import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container } from './styles';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
            <Text style={styles.text1}>Home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    text: {
        fontFamily: 'Inspiration-Regular',
        fontSize: 50,
    },
    text1: {
        fontSize: 50,
    },
});
