import React from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import { Users } from '../../data/Users'


const Stories = () => {
    return (
        <View style = {{marginButtom: 13}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Users.map((story, index) => (
                    <View key={index} style = {{alignItems: 'center'}}>
                        <Image 
                        source ={{uri: story.image}} 
                        style = {styles.story}/>
                        <Text style={{color: 'black'}}>{
                            story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()
                            }
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories;

const styles = StyleSheet.create({
    story:{
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#B1A3F5'
    }
})
