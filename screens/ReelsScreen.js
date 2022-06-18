import React, {useEffect, useRef, useState} from 'react';
import { View, StyleSheet, Button, Text, Image, StatusBar, Touchable, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagePath from '../components/reels/imagePath';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { data } from '../data/videos';


const { height, width } = Dimensions.get('window')


const ReelsScreen = ({ navigation }) => {

    const videoRef = useRef(null);

    const [currentIndex, setIndex] = useState(0)

    const onBuffer = (e) => {
        console.log('Buffering....', e)
    }

    const onError = (e) => {
        console.log('Error raised!', e)
    }

    // useEffect(() =>{
    //     if(!!videoRef.current){
    //         videoRef.current.seek(0)
    //     }
    // },[currentIndex])

    const renderItem = ({item, index}) => {
        return (
            <View style={{ flex: 1, height: height}}>
                <Video
                    // source={require("./../assets/video1.mp4")}
                    source={{uri: item.url}}
                    posterSource={item.thumb}
                    posterResize='cover'
                    ref={videoRef}
                    style={styles.backgroundVideo}
                    resizeMode="cover"
                    onBuffer={onBuffer}
                    onError={onError}
                    // useNativeControls
                    // paused={true}
                    shouldPlay={currentIndex == index}
                    isMuted={false}
                    isLooping={true}
                    volume={0.5}
                />
                <View style={styles.bottomView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={{uri: item.thumb }}
                            style={styles.profilePic}
                        />
                        <Text style={{ marginHorizontal: 8 }}>{item.owner}</Text>
                        <TouchableOpacity>
                            <Text>Follow</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Text numberOfLines={1} style={{ flex: 1 }}>{item.description}</Text>
                        <TouchableOpacity>
                            <Text> more</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.flexHorizontal, marginVertical: 8 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={imagePath.icHeart} style={styles.icon} />
                            <Image source={imagePath.icComment} style={styles.icon} />
                            <Image source={imagePath.icSend} style={styles.icon} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' , padding: 5}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 15, height: 15 }} source={imagePath.icHeart} />
                                <Text style={{ marginLeft: 4 }}>94.6k</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 20, height: 15 }} source={imagePath.icComment} />
                                <Text style={{ marginLeft: 4 }}>102</Text>
                            </View>
                        </View>
                    </View>
                </View> 
            </View>
        )
    }

    const onChangeIndex = ({index}) => {
        setIndex(index)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <StatusBar barStyle='light-content' />

            <SwiperFlatList
                vertical={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onChangeIndex = {onChangeIndex}
            />


            <View style={{ position: 'absolute', top: 40, left: 16 }}>
                <Text style={styles.textStyle}> Reels</Text>
            </View>
            <View style={{ position: 'absolute', top: 40, right: 16 }}>
                <Image source={imagePath.icCamera} style={styles.icon} />
            </View>

        </View>
    );

}

export default ReelsScreen;

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        height: height,
        width: width
    },
    flexHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        paddingHorizontal: 16
    },
    icon: {
        width: 30,
        height: 25,
        marginHorizontal: 6,

    },
    bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 32,
        paddingHorizontal: 16,
        // backgroundColor: '#D7C6EE',
        // height: 120,
        // width: 380,
        // marginTop: 550,
        // borderRadius: 20,
        // opacity: 0.7, 
        // padding: 5
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 35 / 2
    }
});