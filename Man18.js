import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Man18 = () => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row',marginLeft: 30, marginTop: 40}}>
        <Image
            source={require('./image/Vector.png')} 
      />
        <Text style={{marginLeft: 60, fontSize: 18, fontWeight: '600',color:'#000000'}}>Spicy chieckns |</Text>
    </View>
    <View style={{justifyContent:'center', alignItems:'center', marginTop: 100}}>
        <Image 
            source={require('./image/seach.png')}/>
        <Text style={{marginTop: 15,fontSize: 28, fontWeight: '600',color:'#000000'}}>Item not found</Text>
        <Text style={{marginLeft: 80, marginRight: 80}}>Try searching the item with</Text>
        <Text>a different keyword.</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Man18;