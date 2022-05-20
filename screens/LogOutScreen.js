import { View, StyleSheet } from "react-native"
import LogOutButton from "../components/logOut/LogOutButton";
import ProfileDetails from "../components/logOut/ProfileDetails";


const LogOutScreen = ({navigation}) => {
    
    return (
        <View style = {styles.container}>
            <ProfileDetails navigation={navigation}/>
            <LogOutButton/> 
        </View>
    )
}

export default LogOutScreen;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F3CEEF',
               
    },
    

})