import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableHighlight } from "react-native";


export default function Man5() {
    const collection = [
        {
          id: 1,
          gia: 'N1,900',
          name: 'Veggie tomato mix',
          image: require('./image/image1.png'),
        },
        {
          id: 2,
          name: 'Egg and cucmber...',
          gia: 'N1,900',
          image: require('./image/image2.png'),
        },
        {
          id: 3,
          name: 'Fried chicken m.',
          gia: 'N1,900',
          image: require('./image/image3.png'),
        },
        {
          id: 4,
          name: 'Moi-moi and ekpa.',
          gia: 'N1,900',
          image: require('./image/image4.png'),
        },
      ];
  const oneCollection = ( {item} ) => (
    
    <View style={ styles.item }>
      <View style={ styles.avatarContainer }>
        <Image source={item.image} style={styles.avatar}/>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.gia}>{item.gia}</Text>
      </View>
      
    </View>

  )



  // itemSeparator = () => {
  //   return <View style={styles.separator}></View>
  // }
  return (
    <View>
        <View style={{flexDirection:'row',marginTop:20}}>
            <Image 
                source={require('./image/ann.png')}
                style={{marginLeft:20,}}/>
            <Text style={{color:'#000',fontWeight:'600',marginLeft: 50}}>Spicy chieckns</Text>
        </View>
        <SafeAreaView style={{marginTop: 40}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#000',fontSize: 20,fontWeight:'700'}}>Found 6 results</Text>
            </View>
            <FlatList 
            data = { collection }
            // horizontal={true}
            
            numColumns = {2}
            // showsHorizontalScrollIndicator={false}
            renderItem = { oneCollection }
            // ItemSeparatorComponent = { itemSeparator }
            ListFooterComponent ={()=>(<View style={{height:50}}/>)}
                />
        </SafeAreaView>
    </View>


  );
}

const styles = StyleSheet.create({


  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical:10,
    marginHorizontal:10,
    backgroundColor:'#FFFFFF'
  },
  
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8
  },
  name: {
    fontSize:16,
    fontWeight: '400',
    marginLeft: 13,
    flex: 1,
    color:'#000',
    fontWeight:'bold'

  },

  gia: {
    color:'#FA4A0C',
    fontWeight:'bold'
  }
});