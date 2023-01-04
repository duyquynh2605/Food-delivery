import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Man21 = () => (
  <View style={styles.container}>
    <View style={{justifyContent:'center', flexDirection:'row', flex:1}}>
      <View style={{width:'80%', justifyContent:'center'}}>
          <Image
              source={require('./image/Vector.png')} 
        />
          <Text style={{marginTop: 20, fontSize: 30, fontWeight: '600',color:'#000000'}}>My offers</Text>
      </View>
    </View>
    
    <View style={{flex:5,justifyContent:'center', flexDirection:'row'}}>
      <View style={{width:'90%',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize: 28, fontWeight: '600',color:'#000000'}}>ohh snap!  No offers yet</Text>
          <Text style={{}}>Bella dose’t have any offers</Text>
          <Text>yet please check again.</Text>
      </View>
    </View>
   
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Man21;