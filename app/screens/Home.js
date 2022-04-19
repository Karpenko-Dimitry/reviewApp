import React, { useState, useReducer } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, Button, Modal,
    StyleSheet, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { Icon } from 'react-native-eva-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useReducer((prevItems, newItems) => {
        newItems.key = (
            Math.max.apply(
                Math,
                prevItems.map((item) => item.key),
            ) + 1
        ).toString();
        return [...prevItems, newItems]
    }, [
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            name='close-outline'
                            width={30}
                            height={30}
                        />
                        <ReviewForm setModalOpen={setModalOpen} setReviews={setReviews} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Icon onPress={() => setModalOpen(true)} style={styles.modalToggle} name='plus-outline' width={30} height={30} />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Detailes', item);
                        }}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        padding: 10,
        fill: 'black',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,

    }
})