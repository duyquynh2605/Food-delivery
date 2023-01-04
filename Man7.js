import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text, Image,TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const data = [
  {
    id: 1,
    gia: '#1,900',
    name: 'Veggie tomato mix',
    image: require('./image/tomato.png'),
  },
  {
    id: 2,
    name: 'Fishwith mix orange....',
    gia: '#1,900',
    image: require('./image/fishwith.png'),
  },
  {
    id: 3,
    name: 'Veggie tomato mix',
    gia: '#1,900',
    image: require('./image/tomato.png'),
  },
];
// const Separator = () => <View style={styles.itemSeparator} />;
const rightSwipeActions = () => {
  return (
    <View style={{flexDirection:'row'}}>
        <View style={{justifyContent:'center'}}>
          <TouchableOpacity style={{width:50,height:50,backgroundColor: '#DF2C2C',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./image/tim.png')}/>
          </TouchableOpacity>

        </View>

        <View style={{justifyContent:'center',marginLeft:5}}>
          <TouchableOpacity style={{width:50,height:50,backgroundColor: '#DF2C2C',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./image/delete.png')}
                      style={{width:20,height:20}}/>
          </TouchableOpacity>
        </View>

    </View>
    
  );
};


const ListItem = ({ item, index }) => (
  <GestureHandlerRootView>
      <Swipeable
    renderRightActions={rightSwipeActions}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{width:'80%',paddingHorizontal: 20,paddingVertical: 20,backgroundColor: '#FFFFFF',flexDirection:'row',marginVertical:10,borderRadius:20}}>

        <Image source={item.image}/>
        <View style={{ flexDirection:'column',marginLeft:10}}>
          <Text style={{color:'#000',fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{color:'#FA4A0C',fontWeight:'bold'}}>{item.gia}</Text>
      </View>

  </View>
      </View>
  </Swipeable>
  </GestureHandlerRootView>
  

);

const Man7 = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',flex:1,width:'50%',marginLeft: 40}}>
            <Image
                source={require('./image/Vector.png')} 
          />
            <Text style={{fontSize: 18, fontWeight: '600',color:'#000000'}}>Cart</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={ ListItem }

        />
              <View style={{flex: 1}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 20, borderRadius: 20}}>
              <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Complete order</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Man7;