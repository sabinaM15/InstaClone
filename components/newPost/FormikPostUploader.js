import { View, Text, Image, TextInput, Button } from "react-native"
import * as Yup from 'yup'
import { Formik} from "formik"
import React, { useEffect, useState } from "react"
import { Divider } from "react-native-elements"
import validUrl from 'valid-url'
import { db, firebase } from '../../firebase'
import {auth} from 'firebase'


const PLACEHOLDER_IMG = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='

const uploadPostSchema = Yup.object().shape({
    imageURL: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit!')
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailURL, setThumbnailURL] = useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)
    

    const getUserName = () => {
        const user = auth().currentUser
        const unsubscribe = db.collection('users')
            .where('owner_uid', '==', user.uid)
            .limit(1).onSnapshot(
                snapshot => snapshot.docs.map(doc => {
                    setCurrentLoggedInUser({
                        username: doc.data().username,
                        profilePic: doc.data().profile_picture
                    })
            })
        )

        return unsubscribe
    }

    useEffect(() => {
        getUserName()
    }, [])

    const uploadPostToFirebase = (imageURL, caption) => {
        const unsubscribe = db
            .collection('users')
            .doc(firebase.auth().currentUser.email)
            .collection('posts')
            .add({
                imageURL: imageURL,
                username: currentLoggedInUser.username,
                profile_picture: currentLoggedInUser.profilePic,
                owner_uid: firebase.auth().currentUser.uid,
                owner_email: firebase.auth().currentUser.email,
                caption: caption,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                likes_by_users: [],
                comments: [],
            })
            .then(() => navigation.goBack())

        return unsubscribe
    }

    return(
        <Formik 
            initialValues = {{caption: '', imageURL: ''}}
            onSubmit={(values) => {
                uploadPostToFirebase(values.imageURL, values.caption)
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) => 
                <>
                    <View style={{
                        margin: 20, 
                        justifyContent: 'space-between', 
                        flexDirection:'row'}}
                    >
                        <Image 
                            source={{uri: validUrl.isUri(thumbnailURL) ? thumbnailURL : PLACEHOLDER_IMG}} 
                            style={{ width: 150, height: 150}}
                        />
                        
                        <View style={{flex: 1, marginLeft: 12}}>
                            <TextInput
                                style={{fontSize: 20}}
                                placeholder="Write a caption..." 
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur = {handleBlur('caption')}
                                value = {values.caption}
                            />
                        </View>
                    </View>

                    <Divider width={0.2} orientation='vertical'/>
                    <TextInput
                        onChange={e => setThumbnailURL(e.nativeEvent.text)}
                        style={{fontSize: 18}}
                        placeholder="Enter Image URL" 
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageURL')}
                        onBlur = {handleBlur('imageURL')}
                        value = {values.imageURL}
                    />

                    {errors.imageURL && (
                        <Text style = {{fontSize: 10, color: 'red'}}>{errors.imageURL}</Text>
                    )}

                    <Button onPress={handleSubmit} title = 'Share' disabled={!isValid}/>
                </>
            }
            
        </Formik>
    )
}

export default FormikPostUploader;