import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';

import Card from '../shared/card';

export default function Detailes({ route, navigation }) {
    const { title, rating, body } = route.params;
    const pressHandler = () => {
        navigation.goBack();
    };

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.titleText}>{body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
                <Button title="Back home" onPress={pressHandler} />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
   rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        paddingBottom: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
   } 
});
