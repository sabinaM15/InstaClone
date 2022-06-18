import React, { useEffect, useState } from 'react';
// import { SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { db } from '../firebase';


const HomeScreen = ({navigation, post}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collectionGroup('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(post => ({
                id: post.id, ...post.data() }))
            )
        })
    }, [])
    return (
        <SafeAreaView style = {style.container}>
            <Header navigation = {navigation}/>
            <Stories/>
            <ScrollView>
                {posts.map((post, index) => (
                    <Post post={post} key={index}/>
                ))}
            </ScrollView>
            <BottomTabs navigation = {navigation}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#E7DAF9',
        flex: 1
    }
})
export default HomeScreen;

