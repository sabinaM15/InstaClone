import React, {useState} from "react"
import { View, StyleSheet, TextInput, Text, Pressable, TouchableOpacity } from "react-native"
import { Formik } from "formik";
import * as Yup from 'yup'
import { Validator } from "email-validator";

const LogInForm = ({navigation}) => {

  const LogInFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
  })

  return(
    <View style = {styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema = {LogInFormSchema}
        validateOnMount = {true}
        >
          {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
            <>
              <View style = {styles.inputField
                // {borderColor: 
                //   values.email.length < 1 || Validator.validate(values.email) ? 'black' : 'red'
                // }
              }>
                  <TextInput
                      placeholderTextColor = 'gray'
                      placeholder= 'Phone number, username or email'
                      autoCapitalize = 'none'
                      keyboardType='email-address'
                      textContentType = 'emailAddress'
                      autoFocus = {true}
                      onChangeText = {handleChange('email')}
                      onBlur = {handleBlur('email')}
                      value = {values.email}
                      />
              </View>
              
              <View style = {styles.inputField}>
                  <TextInput
                      placeholderTextColor = 'gray'
                      placeholder= 'Password'
                      autoCapitalize = 'none'
                      autoCorrect = {false}
                      keyboardType='email-address'
                      textContentType = 'password'
                      autoFocus = {true}
                      secureTextEntry = {true}
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
                <Text style = { styles.textButton}>Log In</Text>
              </Pressable>

              <View style = {styles.signUpContainer}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.push('SignUp')}
                >
                  <Text style = {styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
              </View>

            </>
          )}
      </Formik>
    </View>
  )
}

export default LogInForm;

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
  },
  button: isValid => ({
    backgroundColor: isValid ? '#F17F30' : '#F6B282',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    minHeight: 42,
    marginTop: 40
  }),
  textButton: {
    fontWeight: '500',
    fontSize: 17
  },
  signUpContainer:{
    flexDirection: "row",
    width: '100%',
    justifyContent: 'center',
    marginTop: 150
  },
  signUpText:{
    color: '#F17F30',
  }
  
})
