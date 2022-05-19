// import { StatusBar } from 'expo-status-bar';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import LogOutScreen from './screens/LogOutScreen';
// import NewPostScreen from './screens/NewPostScreen';
import SignedInStack from './navigation';

export default function App(){
  return <SignedInStack/>
}

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='NewPost'>
//         <Stack.Screen options={{headerShown: false }} name="NewPost" component={NewPostScreen} />
//         <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
//         <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
//         <Stack.Screen name="LogOut" component={LogOutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E5E0E8',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
  
  
  
// });
