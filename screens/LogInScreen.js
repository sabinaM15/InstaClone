import React from "react"
import {View, StyleSheet, Image} from 'react-native'
import LogInForm from '../components/logIn/LogInForm'

const LogInScreen = ({navigation}) => (
    <View style = {styles.container}>
      <View style = {styles.logoContainer}>
        <Image source={require('../assets/Logo.png')} style = {{height: 150, width: 150}}/>
      </View>
      <LogInForm navigation = {navigation}/>

    </View>
)

export default LogInScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F3CEEF',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  logoContainer:{
    alignItems: 'center',
    marginTop: 60
  },
})