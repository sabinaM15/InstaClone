import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import BottomTabs from "../components/home/BottomTabs";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: '#E7DAF9', flex: 1}}>
            <AddNewPost navigation={navigation}/>
            <View style = {{marginBottom: 10}}>
                <View style = {{height: 305}}></View>
                <BottomTabs navigation={navigation}/>
            </View>
            
        </SafeAreaView>
    )
}

export default NewPostScreen;