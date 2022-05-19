import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LogInScreen from './screens/LogInScreen'
import LogOutScreen from './screens/LogOutScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}
const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn' screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NewPost" component={NewPostScreen} />
            <Stack.Screen name="LogIn" component={LogInScreen} />
            {/* <Stack.Screen name="LogOut" component={LogOutScreen} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    
)

export default SignedInStack;