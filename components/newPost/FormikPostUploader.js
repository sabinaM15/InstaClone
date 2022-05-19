import { View, Text, Image, TextInput, Button } from "react-native"
import * as Yup from 'yup'
import { Formik} from "formik"
import { useState } from "react"
import { Divider } from "react-native-elements"
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='

const uploadPostSchema = Yup.object().shape({
    imageURL: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit!')
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailURL, setThumbnailURL] = useState(PLACEHOLDER_IMG)

    return(
        <Formik 
            initialValues = {{caption: '', imageURL: ''}}
            onSubmit={(values) => {
                console.log(values)
                console.log('Your post was submitted successfully 🎉')
                navigation.goBack()
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