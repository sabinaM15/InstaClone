import { View, TouchableOpacity, Image, StyleSheet} from "react-native"
import { useState } from "react";
import { Divider } from "react-native-elements";


// export const bottomTabIcons = [
//     {
//         name: 'Home',
//         inactive: 'https://img.icons8.com/fluency-systems-regular/344/home.png',
//         active: 'https://img.icons8.com/fluency-systems-filled/344/home.png'
//     },
//     {
//         name: 'Search',
//         active: 'https://img.icons8.com/ios-filled/344/search--v3.png',
//         inactive: 'https://img.icons8.com/ios-filled/344/search--v4.png'
//     },
//     {
//         name: 'Reels',
//         active: 'https://img.icons8.com/ios-filled/344/instagram-reel.png',
//         inactive: 'https://img.icons8.com/ios/344/instagram-reel.png'
//     },
//     {
//         name: 'Profile',
//         active: 'https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/215975505_4129958653720083_4710859942483973229_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=8k7qfYUfvtkAX_0H3t4&_nc_ht=scontent.fotp3-2.fna&oh=00_AT9KjfgmtQEmO5iZYrz9fkxy6PnTphhyA0pqOgHf50aD-A&oe=6286C717',
//         inactive: 'https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/215975505_4129958653720083_4710859942483973229_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=8k7qfYUfvtkAX_0H3t4&_nc_ht=scontent.fotp3-2.fna&oh=00_AT9KjfgmtQEmO5iZYrz9fkxy6PnTphhyA0pqOgHf50aD-A&oe=6286C717'
//     }
// ]

const BottomTabs = ({navigation}) => {
  
    return (
        <View style ={{backgroundColor:'#E7DAF9'}}>
            <Divider width={3} orientation='vertical' />
            <View style = {styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('Home')}>
                    <Image 
                        source={require('../../assets/BottomTabsIcons/homeInactive.png')}
                        style = {styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push('Search')}>
                    <Image
                        source={require('../../assets/BottomTabsIcons/searchInactive.png')}
                        style = {styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push('Reels')}>
                    <Image
                        source={require('../../assets/BottomTabsIcons/reelInactive.png')}
                        style = {styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push('LogOut')}>
                    <Image
                        source={require('../../assets/BottomTabsIcons/UserInactive.png')}
                        style = {styles.icon} /> 
                </TouchableOpacity>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      paddingTop: 10,
    //   backgroundColor: 'purple'
  },
//   wrapper: {
//     position: 'absolute',
//     width: '100%',
//     bottom: '0.5%',
//     zIndex: 999,
//     backgroundColor: '#F9BCFB'
//   },
  profilePic:{
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'black',
  },
  iconsContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10
  },
  icon:{
      width: 30,
        height: 30,
        resizeMode: 'contain',
        // marginLeft: 15
    },
})


export default BottomTabs;