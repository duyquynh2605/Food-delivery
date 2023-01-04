import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Man20 = () => (
  <View style={styles.container}>
    <View style={{justifyContent:'center', alignItems:'center', marginTop: 100}}>
        <Image 
            source={require('./image/wifj.png')}/>
        <Text style={{marginTop: 15,fontSize: 28, fontWeight: '600',color:'#000000'}}>No internet Connection</Text>
        <Text style={{marginLeft: 40, marginRight: 80}}>Your internet connection is currently
not available please check or try again.</Text>
    </View>
    <View>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 30, borderRadius: 20}}>
            <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Start odering</Text>
        </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Man20;