import React, { useRef, useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, Animated, Dimensions } from 'react-native';
import profile from './image/profile.png';
import order from './image/order.png';
import offer from './image/offer.png';
import privacy from './image/privacy.png';
import security from './image/security.png';
import signout from './image/signout.png';
import image10 from './image/image10.png';
import image11 from './image/image11.png';


const WIDTH = Dimensions.get('window').width;
export default function App4() {
    const [currentTab, setCurrentTab] = useState("Profile");
    return (
        <SafeAreaView style={styles.container}>
            <View style={{justifyContent:'flex-start',padding: 20}}>
                <View style={{flexGrow: 1}}>
                    {TabButton(currentTab, setCurrentTab, "Profile", profile)}
                    {TabButton(currentTab, setCurrentTab, "orders", order)}
                    {TabButton(currentTab, setCurrentTab, "offer and promo", offer)}
                    {TabButton(currentTab, setCurrentTab, "Privacy policy ", privacy)}
                    {TabButton(currentTab, setCurrentTab, "Security ", security)}
                </View>
                <View>
                    {TabButton(currentTab, setCurrentTab, "Sign-out",signout )}    
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center', width: WIDTH}}>
            <Image source={image10}
                    style={{right: -12}} />
            <Image source={image11}
            style={{right: 171}}>
            </Image>
                {/* <Text style={{width:100, height:100, backgroundColor:'red'}}>aaaaa</Text> */}
            </View>

            
        </SafeAreaView>
    );
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
    return(
        <TouchableOpacity onPress={() => {
            if (title == "Sign-out") {

            } else {
                setCurrentTab(title)
            }
        }}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            paddingVertical: 8,
                            backgroundColor: currentTab == title ? '#000' : 'transparent',
                            paddingLeft: 10,
                            paddingRight: 10,
                            borderRadius: 8,
                            marginTop: 25
                        }}>
                            <Image source={image}
                            style={{
                                tintColor: currentTab == title ? '#FA4A0C' : '#FFF' 
                            }}/>
                            <Text style={{
                                fontSize: 17,
                                fontWeight:'bold',
                                paddingLeft: 15,
                                color: currentTab == title ? '#FA4A0C' : '#FFF' 
                            }}>{title}</Text>

                        </View>
                    </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FA4A0C',
        // justifyContent:'flex-start',
        // alignItems:'flex-start',
        flexDirection:'row'
    }
})
