import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-eva-icons';


export default function Header({ navigation, route, options }) {
    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }
    return (
        <ImageBackground source={require('../../assets/media/game_bg.png')} style={styles.header}>
            <Icon onPress={openMenu} style={styles.icon} name='menu-outline' width={30} height={30} />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../../assets/media/heart_logo.png')} />
                <Text style={styles.headerText}>{route.name}</Text>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'coral',
        padding: 10,
    },
    icon: {
        padding: 10,
        fill: 'black',
    },
    headerText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        fontFamily: 'Nunito-Bold',
    },
    headerImage: {
        width: 20,
        height: 20,
    },
    headerTitle: {
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    }
})