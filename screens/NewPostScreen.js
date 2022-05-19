import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: '#F3CEEF', flex: 1}}>
            <AddNewPost navigation={navigation}/>
        </SafeAreaView>
    )
}

export default NewPostScreen;