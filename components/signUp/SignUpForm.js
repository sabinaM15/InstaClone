import React, {useState} from "react"
import { View, StyleSheet, TextInput, Text, Pressable, TouchableOpacity } from "react-native"
import { Formik } from "formik";
import * as Yup from 'yup'
import Validator from "email-validator";

const SignUpForm = ({navigation}) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
    })
    return(
        <View style = {styles.wrapper}>
            <Formik 
                initialValues={{email: '', username: '', password: ''}}
                onSubmit = {(values) => {
                    console.log(values)
                }}
                validationSchema = {SignUpFormSchema}
                validateOnMount = {true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style = {styles.inputField}>
                            <TextInput
                                placeholderTextColor = 'gray'
                                placeholder= 'Email'
                                autoCapitalize = 'none'
                                keyboardType='email-address'
                                autoFocus = {true}
                                onChangeText = {handleChange('email')}
                                onBlur = {handleBlur('email')}
                                value = {values.email}
                            />
                        </View>

                        <View style = {styles.inputField}>
                            <TextInput
                                placeholderTextColor = 'gray'
                                placeholder= 'Username'
                                autoCapitalize = 'none'
                                autoFocus = {true}
                                onChangeText = {handleChange('username')}
                                onBlur = {handleBlur('username')}
                                value = {values.username}
                            />
                        </View>

                        <View style = {styles.inputField}>
                            <TextInput
                                placeholderTextColor = 'gray'
                                placeholder= 'Password'
                                autoCapitalize = 'none'
                                secureTextEntry = {true}
                                textContentType = 'password'
                                onChangeText = {handleChange('password')}
                                onBlur = {handleBlur('password')}
                                value = {values.password}
                            />
                        </View>
                        
                        <Pressable 
                            onPress = {handleSubmit} 
                            titleSize = {20} 
                            style = {styles.button(isValid)}
                        >
                            <Text style = { styles.textButton}>Sign Up</Text>
                        </Pressable>

                        <View style = {styles.logInContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style = {styles.signUpText}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 4,
        borderWidth: 1,
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#F7E9EF'
    },
    wrapper:{
        marginTop: 30,
        width: '100%'
    },
    button: isValid => ({
        backgroundColor: isValid ? '#F17F30' : '#F6B282',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        minHeight: 42,
        marginTop: 20
    }),
    textButton: {
        fontWeight: '500',
        fontSize: 17
    },
    logInContainer:{
        color: 'black',
        flexDirection: "row",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },
    signUpText:{
        color: '#F17F30',
    }
})

export default SignUpForm