import { View, Text, Image, StyleSheet } from "react-native"
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";


const ProfileDetails = ({navigation}) => {
    
    return (
        <View style = {styles.container}>
            <View style = {styles.backButton}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source ={{uri: 'https://img.icons8.com/ios/344/circled-left-2.png'}}
                        style = {{width: 40, height: 40}}/>
                </TouchableOpacity>

            </View>
            

            <Image
                source={require('../../assets/BottomTabsIcons/UserInactive.png')}
                style = {styles.profile} /> 

            <View style = {styles.details}>
                
                <View style = {styles.detailsCell}>
                    <Text style = {styles.textDetails}>Posts</Text>
                    <Text style = {{fontSize: 20}}>10</Text>
                </View>

                <Divider width={3} orientation='vertical' />

                <View style = {styles.detailsCell}>
                    <Text style = {styles.textDetails}>Followers</Text>
                    <Text style = {{fontSize: 20}}>100</Text>
                </View>

                <Divider width={3} orientation='vertical' />

                <View style = {styles.detailsCell}>
                    <Text style = {styles.textDetails}>Follows</Text>
                    <Text style = {{fontSize: 20}}>50</Text>
                </View>
        
            </View>
            

        </View>
    )
}


const Icon = ({imgStyle, imgURL}) => (
    <TouchableOpacity>
        <Image style = {imgStyle} source = {{uri: imgURL}} />
        
    </TouchableOpacity>
)

export default ProfileDetails;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E7DAF9',
        width: '100%'
               
    },
    profile:{
        width: 150,
        height: 150,
        margin: 50,
        borderRadius: 100
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 350 ,
        // backgroundColor: 'green'
    },
    detailsCell: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textDetails: {
        fontSize: 20,
        fontWeight: '500'
    },
    backButton: {
        width: '100%',
        marginLeft: 20,
        marginTop: 30,
    }
})

