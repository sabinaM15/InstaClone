import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { auth, firebase } from "../../firebase";
import React from "react";

const  handleSingOut = async () => {
    try {
        firebase.auth().signOut()
        console.log('Signed Out Successfully!')
    } catch (error) {
        console.log(error)
    }
    
}
const LogOutButton = () => {
    return (
        <View style = {styles.container}>
            {/* <Text style = {{fontSize: 20}}>Email: {auth.currentUser?.email}</Text> */}
            <TouchableOpacity 
                style = {styles.button}
                onPress = { handleSingOut}
            >
                <Text style = {styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '100%',
    },
    button: {
        backgroundColor: '#5E3B8E',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    }, 
    buttonText: {
        fontWeight: '600',
        fontSize: 16
    }

})

export default LogOutButton;