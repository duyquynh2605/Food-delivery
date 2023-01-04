import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import line3 from './image/Line3.png';

class Button extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                <View style={{height:50, width:'80%', backgroundColor: '#FFFFFF',borderRadius: 30,alignItems:'center',justifyContent:'center' }}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'80%'}}>
                        <Text style={{fontSize:16, color:'#000',fontWeight:'bold'}}>{this.props.title}</Text>
                        <Image 
                            source={require('./image/Vector10.png')}/>
                    </View>

                </View>
            </View>
        )

    }
}

const Man6 = () => {
    return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={{marginLeft: 30, marginTop: 40}}>
            <Image
                source={require('./image/Vector.png')}/>
            
        </View>
      </View>
      
      <View style={{flex:6,}}>
        <Text style={{ fontSize: 30, fontWeight: '600',color:'#000000',marginLeft: 30}}>My profile</Text>
        <View style={{justifyContent:'center',flexDirection:'row'}}>
                <View style={{flexDirection: 'row',width:'80%',justifyContent:'space-between',marginTop: 30}}>
                        <Text style={{fontSize: 14,color:'#000000',fontWeight:'600'}}>Personal details</Text>
                        <Text style={{fontSize: 12,color:'#F47B0A'}}>change</Text>
                </View>
        </View> 
        <View style={{justifyContent:'center', flexDirection:'row'}}>
          <View style={{ width:'80%', backgroundColor: '#FFFFFF',borderRadius: 30,marginTop: 10,flexDirection:'row',paddingBottom:20}}>
            <Image
                source={require('./image/Rectangle6.png')}
                style={{marginLeft: 10, marginTop: 10}} />
            <View>
                <Text style={{marginTop: 10,marginLeft: 10,color:'#000000',fontWeight: 'bold'}}>Marvis Ighedosa</Text>
                <Text style={{marginTop: 5,marginLeft: 10,fontSize: 12}}>Dosamarvis@gmail.com</Text>
                <Image source={line3}
                        style={{marginTop:5}}/>
                <Text style={{marginTop: 5,marginLeft: 10,fontSize: 12}}>+234 9011039271</Text>
                <Image source={line3}
                        style={{marginTop:5}}/>
                <Text style={{marginTop: 5,marginLeft: 10,fontSize: 12, marginRight: 140}}>No 15 uti street off ovie palace
                road effurun delta state</Text>
            </View>
        </View>
        </View>
        <Button title={"Order"}/>
        <Button title={"Pending reviews"}/>
        <Button title={"Faq"}/>
        <Button title={"Help"}/>


    
      </View>
      
      

      <View style={{flex:2}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 100, borderRadius: 20}}>
              <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Update</Text>
          </TouchableOpacity>
      </View>



    </View>
    );
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    outter: {
        width: 12,
        height: 12,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center',
        borderColor: '#FA4A0C',
    },
    inner: {
        width: 8,
        height: 8,
        backgroundColor: '#FA4A0C',
        borderRadius: 20,
    },
    outter1: {
      width: 30,
      height: 30,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#EB4796',
      borderColor: '#EB4796',
      marginLeft: 25,
      marginTop: -10
    },
    outter2:{
      width: 30,
      height: 30,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#F47B0A',
      borderColor: '#F47B0A',
      marginLeft: 25,
      marginTop: -15,
      borderBottomWidth: 0.5
    },
    outter3: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#0038FF',
        borderColor: '#0038FF',
        marginLeft: 25,
        marginTop: -10
    }
  });
  
  export default Man6;