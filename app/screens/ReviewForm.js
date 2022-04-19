import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/botton';

const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required().test('is-num-1-5', 'Rating must be a number', (value) => {
            return parseInt(value) < 6 && parseInt(value) > 0;
        })
});

export default function ReviewForm({ setReviews, setModalOpen }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, action) => {
                    setReviews(values);
                    action.resetForm();
                    setModalOpen(false);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                    return (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Review title"
                                onChangeText={handleChange('title')}
                                value={values.title}
                            />
                            <Text style={globalStyles.errorText}>{touched.title && errors.title}</Text>
                            
                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder="Review body"
                                onChangeText={handleChange('body')}
                                value={values.body}
                            />
                            <Text style={globalStyles.errorText}>{touched.body && errors.body}</Text>

                            <TextInput
                                style={globalStyles.input}
                                placeholder="Rating (1-5)"
                                onChangeText={handleChange('rating')}
                                value={values.rating}
                                keyboardType='numeric'
                                maxLength={1}
                            />
                            <Text style={globalStyles.errorText}>{touched.rating && errors.rating}</Text>
                            <FlatButton text='Submit' onPress={handleSubmit}/>
                        </View>
                    )
                }}
            </Formik>
        </View>
    )
}