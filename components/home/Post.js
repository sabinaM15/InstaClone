import React, {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db, firebase } from "../../firebase";

const postFooterIcons = [
    {
        name: "Like",
        imageURL: 'https://img.icons8.com/nolan/344/like.png',
        likedImageUrl: 'https://img.icons8.com/cotton/344/hearts---v1.png'
    },
    {
        name: "Comment",
        imageURL: 'https://img.icons8.com/nolan/2x/feedback.png',
    },
    {
        name: "Share",
        imageURL: 'https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/2x/external-paper-plane-kindergarten-icongeek26-outline-gradient-icongeek26.png',
    },
    {
        name: "Save",
        // imageURL: 'https://img.icons8.com/nolan/2x/save.png',
        imageURL: 'https://img.icons8.com/external-bearicons-gradient-bearicons/2x/external-Save-social-media-bearicons-gradient-bearicons.png',
    },
]
const Post = ({post}) => {
    const handleLike = post => {
        const currentLikeStatus = !post.likes_by_users.includes(firebase.auth().currentUser.email)

        db.collection('users')
            .doc(post.owner_email)
            .collection('posts')
            .doc(post.id)
            .update({
                likes_by_users: currentLikeStatus ? firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email) : firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email)
            })
            .then(() => {
                console.log('Document successfully updated !')
            })
            .catch(error => {
                console.log('ERROR! Updating document: ', error)
            })
    }

    return(
        <View style = {{marginBottom: 30}}>
            <Divider width={2} orientation='vertical'/>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style = {{marginHorizontal: 15, marginTop: 10}}>
                <PostFooter post={post} handleLike = {handleLike}/>
                <Likes post={post} />
                <Captions post={post}/>
                <CommentsSection post={post}/>
                <Comments post={post}/>
            </View>
            
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin : 5, 
        alignItems : 7}}>
        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: post.profile_picture}} style={styles.story}/>
            <Text style={{color: 'black', marginLeft: 5, fontWeight:'700'}}>
                {post.username}
            </Text>
        </View>
        <Text style={{color: 'black', fontWeight:'900'}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style = {{
        width: '100%',
        height: 450,
    }}>
        <Image 
        source={{uri: post.imageURL}}
        // source={require('../../assets/MessageButton.png')}
        style = {{height: '100%', resizeMode: 'cover'}}
        />
    </View>
    
)

const PostFooter = ({handleLike, post}) =>(
    <View style={{flexDirection: 'row'}}>
        <View style = {styles.leftFooterIconsContainer}>
            <TouchableOpacity onPress={() => handleLike(post)}>
                <Image 
                    style={styles.footerIcon} 
                    source = {{uri: post.likes_by_users.includes(firebase.auth().currentUser.email) 
                        ? postFooterIcons[0].likedImageUrl 
                        : postFooterIcons[0].imageURL }}
                />
            </TouchableOpacity>

            <Icon imgStyle={styles.footerIcon} imgURL = {postFooterIcons[1].imageURL}/>
            <Icon imgStyle={styles.footerIcon} imgURL = {postFooterIcons[2].imageURL}/>
        </View>
        <View style = {{flex: 1, alignItems: 'flex-end'}}>
            <Icon imgStyle={styles.footerSaveIcon} imgURL = {postFooterIcons[3].imageURL}/>
        </View>
    </View>
    
)

const Icon = ({imgStyle, imgURL}) => (
    <TouchableOpacity>
        <Image style = {imgStyle} source = {{uri: imgURL}} />
    </TouchableOpacity>
)

const Likes = ({post}) => (
    <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{fontWeight: '600'}}>{post.likes_by_users.length.toLocaleString('en')} likes</Text>
    </View>
)

const Captions = ({post}) => (
    <View style = {{marginTop: 5}}>
        <Text>
            <Text style={{fontWeight: '600'}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
    
    
)

const CommentsSection = ({post}) => (
    <View style={{marginTop: 5}}>
        {!!post.comments.length && (
            <Text style = {{color: 'gray'}}>
            View{post.comments.length > 1 ? ' all' : ' '} {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
        )}
    </View>
    
)

const Comments = ({post}) => (
    <>
        {post.comments.map((comment, index) => (
            <View key = {index} style = {{ flexDirection: 'row', marginTop: 5}}>
                <Text>
                    <Text style={{fontWeight: '600'}}>{comment.user}</Text>
                    <Text> {comment.comment}</Text>
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story:{
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1,
        borderColor: '#B1A3F5'
    },
    footerIcon:{
        width: 35,
        height: 35,
        // marginRight: 20
    },
    footerSaveIcon: {
        width: 27,
        height: 27,
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },
    footerSaveIcon: {
        width: 25,
        height: 25,
    }
})


export default Post;