import React from 'react';
// import { SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BottomTabs from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { Posts } from '../data/Posts';
import { bottomTabIcons } from '../components/home/BottomTabs';


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style = {style.container}>
            <Header navigation = {navigation}/>
            <Stories/>
            <ScrollView>
                {Posts.map((post, index) => (
                    <Post post={post} key={index}/>
                ))}
            </ScrollView>
            <BottomTabs navigation = {navigation}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#F3CEEF',
        flex: 1
    }
})
export default HomeScreen;

