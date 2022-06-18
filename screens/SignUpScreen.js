import { View, StyleSheet, Image } from "react-native"
import SignUpForm from "../components/signUp/SignUpForm";

const SignUpScreen = ({navigation}) => (
    <View style = {styles.container}>
        <View style = {styles.logoContainer}>
            <Image source={require('../assets/Logo.png')} style = {{height: 150, width: 150}}/>
            <SignUpForm navigation = {navigation}/>
        </View>
    </View>
)

export default SignUpScreen;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#E7DAF9',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 60
    },
})