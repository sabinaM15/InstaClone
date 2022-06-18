import { useState } from "react"
import { View, StyleSheet, Image, Text } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";


const SearchBar = ({value, updateSearch, style}) => {
    const [query, setQuery] = useState();
    const [error, setError] = useState();

    return(
        <View style = {[styles.container, style]}>
            <View style = {styles.searchContainer}>
                <View style = {styles.vwSearch}>
                    <Image
                        source={require('../../assets/SearchButtonGray.png')}
                        style = {styles.icon} 
                    />
                </View>

                <TextInput 
                    placeholder = "Search" 
                    value = {query} 
                    style = {styles.textInput} 
                    onChangeText = {(text)=>{
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        if(text.length > 25)
                            setError('Query too long!')
                    }}
                />

                {
                    query ? 
                    <TouchableOpacity onPress = {() => setQuery('')} style = {styles.vwClear}>
                        <Image
                            source={require('../../assets/Clear.png')}
                            style = {styles.iconClear} 
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                    : <View style = {styles.vwClear}/>
                }
            </View>
            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({

    container: {
        height: 80,
        alignItems: 'center'
    }, 
    searchContainer:{
        backgroundColor:'white',
        width: '90%',
        height: 40,
        flexDirection: 'row'
    },
    icon:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 5
    },
    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40
    },
    textInput: {
        flex: 1
    }, 
    vwClear: {
        flex: 0.2,
        alignContent: 'center',
        justifyContent: 'center'
    },
    iconClear:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginTop: 30,
        marginRight: 10
    },
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',

    },
})