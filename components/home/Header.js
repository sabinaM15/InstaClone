import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"


const Header = ({navigation}) =>{
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Image source={require('../../assets/LogoText.png')} style = {styles.logoImage}/> 
            </TouchableOpacity>

            <View style = {styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPost')}>
                    <Image source={require('../../assets/AddButton.png')} style = {styles.icon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style = {styles.unreadBadge}>
                        <Text style = {styles.unreadBadgeText}>5</Text>
                    </View>
                    <Image source={require('../../assets/HeartButton.png')} style = {styles.icon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style = {styles.unreadBadge}>
                        <Text style = {styles.unreadBadgeText}>2</Text>
                    </View>
                    <Image source={require('../../assets/MessageButton.png')} style = {styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    iconsContainer:{
        flexDirection: 'row'
    },
    logoImage: {
      width: 100,
      height: 50,
      resizeMode: 'contain'
    },
    icon:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginLeft: 15
    },
    unreadBadge: {
        backgroundColor: '#BEF7F1',
        position: 'absolute',
        left: 30,
        buttom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'black',
        fontWeight: '600'
    }
})

export default Header;
