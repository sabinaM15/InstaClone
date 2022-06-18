import { View, StyleSheet } from "react-native"
import BottomTabs from "../components/home/BottomTabs";
import LogOutButton from "../components/logOut/LogOutButton";
import ProfileDetails from "../components/logOut/ProfileDetails";


const LogOutScreen = ({navigation, post}) => {
    
    return (
        <>
            <View style = {styles.container}>
                <ProfileDetails navigation={navigation} post={post}/>
                <LogOutButton/>
            </View>
            <BottomTabs navigation={navigation}/>
        </>
        
    )
}

export default LogOutScreen;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E7DAF9',
               
    },
    

})