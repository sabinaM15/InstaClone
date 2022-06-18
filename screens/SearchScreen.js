import { View, StyleSheet, Image } from "react-native"
import { useState } from "react"
import SearchBar from "../components/search/SearchBar"
import { TouchableOpacity } from "react-native-gesture-handler"
import BottomTabs from "../components/home/BottomTabs"
const SearchScreen = ({navigation}) => {
    const [value, setValue] = useState()

    function updateSearch(value){
        // do to
        console.log(value)
    }

    return(
        <View style = {styles.container}>
            <View style = {{height: '10%', backgroundColor: '#E7DAF9'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source ={{uri: 'https://img.icons8.com/ios/344/circled-left-2.png'}}
                        style = {{width: 30, height: 30, marginTop: 30, marginLeft: 5}}/>
                </TouchableOpacity>
            </View>
            <View style = {{height: '50%', backgroundColor: '#E7DAF9', borderRadius: 50}}>
                <SearchBar value = {value} updateSearch = {updateSearch} style = {{marginTop: '8%'}}/>
                <Image 
                    source={require('../assets/TextForSearch.png')}
                    style = {styles.img}/>
            
                <View>
                    <View style = {{height: 237}}></View>
                    <BottomTabs navigation={navigation}/>
                </View>
            </View>

        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20
        backgroundColor: '#E7DAF9'
    },
    img: {
        height: '55%',
        width: '100%',
        margin: 10
    }
})