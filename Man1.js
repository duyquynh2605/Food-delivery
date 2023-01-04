import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import logo1 from './image/Logo1.png'


const Man1 = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{height:60,width:60,backgroundColor:'#FFF',borderRadius:30,justifyContent:'center',alignItems:'center',marginLeft:30}}>
                    <Image source={logo1}/>
                </View>
            </View>
            <View style={{flex:4}}>
                <Text style={{fontSize:60,color:'#FFFFFF',fontWeight:'bold',marginLeft:30}}>Food for</Text>
                <Text style={{fontSize:60,color:'#FFFFFF',fontWeight:'bold',marginTop:-30,marginLeft:30}}>Everyone</Text>
            </View>
            <View style={styles.anh}>
                <Image
                    source={require('./image/face1.png')} 
                    style={{marginLeft: 172, height: 320}}/>
                <Image
                    source={require('./image/face2.png')}
                    style={{width: 240,height: 360, marginTop: -50, marginLeft: -392}} />
            </View>
            <View style={{flex:3}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FFFFFF', width: '70%', height: 50, marginLeft: 55, marginTop: 100, borderRadius: 20}}>
                    <Text style={{color: '#FF460A',fontSize:17, fontWeight:'600'}}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
   
  );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FF4B3A'
    },
    anh: {
        flexDirection: 'row',
        flex:5
      }
    

});

export default Man1;