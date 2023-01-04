import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const Man1 = () => (
  <View style={styles.container}>
    <View style={styles.logo}>
        <TouchableOpacity style={{marginTop: 56, marginLeft: 49,width: '22%', height:'22%', borderColor: 'white', borderWidth: 1, borderRadius: 100, backgroundColor: '#FFFFFF'}}>

        </TouchableOpacity>
        <Text style={styles.text}>Food for Everyone</Text>
    </View>
    <View style={styles.anh}>
    <Image
        source={require('./image/face1.png')} 
        style={{marginLeft: 172, height: 320}}/>
      <Image
        source={require('./image/face2.png')}
        style={{width: 240,height: 360, marginTop: -50, marginLeft: -392}} />
    </View>
    <View>
      <TouchableOpacity style={{marginTop: 20, marginLeft: 50,width: '70%', height:'25%', borderColor: 'white', borderWidth: 1, borderRadius: 100, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: "#FF460A"}}>Get starteed</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FA4A0C"
  },
  text: {
    fontSize: 65,
    color: "#FFFFFF",
    fontWeight: "800",
    marginLeft: 51, marginTop: 31, 
  },
  anh: {
    flexDirection: 'row',
  }
});
export default Man1;