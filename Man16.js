import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Man16 = () => (
  <View style={styles.container}>
    <View style={{justifyContent:'flex-start', flex:1,flexDirection: 'row', alignItems:'center'}}>
        <View style={{ width:"70%" ,justifyContent:'space-around' , flexDirection: 'row'}}>
            <Image
                source={require('./image/Vector.png')} 
        />
            <Text style={{ fontSize: 20, fontWeight: '600',color:'#000000'}}>Orders</Text>
        </View>
    </View>
    
    <View style={{justifyContent:'center', alignItems:'center', flex:5}}>
        <Image 
            source={require('./image/Cart.png')}/>
        <Text style={{fontSize: 28, fontWeight: '600',color:'#000000'}}>No orders yet</Text>
        <Text style={{width:'54%', fontSize:17, marginTop:20}}>Hit the orange button down</Text>
        <Text style={{width:'49%', fontSize:17, }}>below to Create an order</Text>
    </View>
    <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, borderRadius: 20}}>
            <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Start odering</Text>
        </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:20
  },
});

export default Man16;