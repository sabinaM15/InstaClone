import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const Post = ({post}) => {
    return(
        <View style = {{marginBottom: 30}}>
            <Divider width={2} orientation='vertical'/>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style = {{marginHorizontal: 15, marginTop: 10}}>
                <PostFooter />
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
                {post.user}
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

const PostFooter = () =>(
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style = {styles.leftFooterIconsContainer}>
            <Image source={require('../../assets/HeartButton.png')} style = {styles.footerIcon}/>
            <Image source={require('../../assets/CommentButton.png')} style = {styles.footerIcon}/>
            <Image source={require('../../assets/ShareButton.png')} style = {styles.footerIcon}/>
        </View>
        <View>
            <Image source={require('../../assets/SaveButton.png')} style = {styles.footerSaveIcon}/>
        </View>
    </View>
    
)

const Likes = ({post}) => (
    <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text>
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
        width: 27,
        height: 27,
        marginRight: 20
    },
    footerSaveIcon: {
        width: 27,
        height: 27,
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
        
    }
})


export default Post;