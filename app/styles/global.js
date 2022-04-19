import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 24,
    },
    titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
       borderWidth: 1,
       borderColor: "#ddd",
       borderRadius: 6,
       fontSize: 16,
       padding: 10,
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export const images = {
    ratings: {
        1: require('../../assets/media/rating-1.png'),
        2: require('../../assets/media/rating-2.png'),
        3: require('../../assets/media/rating-3.png'),
        4: require('../../assets/media/rating-4.png'),
        5: require('../../assets/media/rating-5.png'),
    }
};
``