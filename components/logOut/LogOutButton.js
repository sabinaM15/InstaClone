// import { useNavigation } from "@react-navigation/native";
// import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
// import { auth } from "../../firebase";

// const LogOutButton = () => {
//     const navigation = useNavigation()

//     const handleSingOut = () => {
//         auth
//             .signOut()
//             .then(() => { navigation.replace("LogIn")})
//             .catch(error => alert(error.message))
//     }
//     return (
//         <View style = {styles.container}>
//             <Text style = {{fontSize: 20}}>Email: {auth.currentUser?.email}</Text>
//             <TouchableOpacity 
//                 style = {styles.button}
//                 onPress = { handleSingOut}
//             >
//                 <Text style = {styles.buttonText}>Sign Out</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: 'red',
//         width: '100%',
//     },
//     button: {
//         backgroundColor: '#ECF3CE',
//         width: '60%',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginTop: 40
//     }, 
//     buttonText: {
//         fontWeight: '600',
//         fontSize: 16
//     }

// })

// export default LogOutButton;