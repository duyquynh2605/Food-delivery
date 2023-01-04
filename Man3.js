import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from "react-native";
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
      itemSeparator = () => {
        return <View style={styles.separator}></View>
      }

export default function Man3() {
  
  return(
    <View style={styles.container}>
        <View style={{flex:6}}>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:20}}>
                <Image 
                    source={require('./image/Vec.png')}
                    style={{}}/>
                <Image 
                    source={require('./image/hang.png')}/>
                
            </TouchableOpacity>
            <Text style={{color:'#000',fontSize: 30,fontWeight:'700',marginLeft: 30, marginTop: 30}}>Delicious</Text>
            <Text style={{color:'#000',fontSize: 30,fontWeight:'700',marginLeft: 30}}>food for you</Text>
          <View style={{marginTop: 20}}>
            <TouchableOpacity style={{height: 40, width:300, borderWidth:1,borderColor:'#000000', justifyContent:'center',borderRadius: 20,marginLeft: 30}}>
              <View style={{flexDirection:'row'}}>
                <Image 
                  style={{marginLeft: 20}}
                  source={require('./image/search.png')} />
                <Text style={{ fontSize:18, marginLeft: 10}}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 60, height: 50,marginRight: 30, flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
          <TouchableOpacity style={{width: '25%',borderBottomWidth: 1,borderBottomColor:'#FA4A0C'}}>
                <Text style={{marginLeft:15,color:'#FA4A0C'}}>Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%',}}>
                <Text>Drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%',}}>
                <Text>Snacks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%'}}>
                <Text>Sauce</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{color:'#FA4A0C',left: 280}}>see more</Text>
        <View style={{height: 200, paddingLeft: 32,flex:6}}>
            <FlatList
             data={ collection }
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             renderItem = { oneCollection }
             ItemSeparatorComponent = { itemSeparator }
             style={{flexDirection: 'row'}}
             />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%',marginLeft: 35,marginTop: 30,flex:1}}>
            <Image
                source={require('./image/ab.png')}/>
                        <Image
                source={require('./image/ac.png')}/>
                            <Image
                source={require('./image/user.png')}/>
                            <Image
                source={require('./image/af.png')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: {
        height: 1,
        width: 50,
        backgroundColor: '#CCC',
    },
    name: {
        color: '#000',
        marginTop: 20,
        marginLeft: 20
    },
    gia: {
        color:'#FA4A0C',
        marginLeft: 60
    },
    avatar: {
        height: 124,
        width: 165,
    },

});