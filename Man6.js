import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";


const CARD = 'CARD';
const BANK_ACCOUNT = 'BANK_ACCOUNT';
const PAYPAL = 'PAYPAL';
const Man6 = () => {
    const [mood, setMood] = useState(CARD);
    return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={{flexDirection: 'row',marginLeft: 30, marginTop: 40}}>
            <Image
                source={require('./image/Vector.png')} 
          />
            <Text style={{marginLeft: 115, fontSize: 18, fontWeight: '600',color:'#000000'}}>My profile</Text>
        </View>
      </View>
      
      <View style={{flex:6,}}>
        <View style={{flex:1}}>
          <Text style={{fontSize: 17,color:'#000000',fontWeight:'600',marginTop: 20, marginLeft:30}}>Information</Text>
        </View>
        <View style={{justifyContent:'center', flexDirection:'row', flex:3}}>
          <View style={{height:100, width:'80%', backgroundColor: '#FFFFFF',borderRadius: 30,marginTop: 10,flexDirection:'row'}}>
            <Image
                source={require('./image/Rectangle6.png')}
                style={{marginLeft: 10, marginTop: 10}} />
            <View>
                <Text style={{marginTop: 10,marginLeft: 10,color:'#000000',fontWeight: '400'}}>Marvis Ighedosa</Text>
                <Text style={{marginTop: 10,marginLeft: 10,fontSize: 10}}>dosamarvis@gmail.com</Text>
                <Text style={{marginTop: 10,marginLeft: 10,fontSize: 10, marginRight: 140}}>No 15 uti street off ovie palace
                road effurun delta state</Text>
            </View>
        </View>
        </View>

        <Text style={{fontSize: 17,color:'#000000',fontWeight:'600',marginTop: 10, flex:1,marginLeft:30}}>Payment Method</Text>

        <View style={{justifyContent:'center',flexDirection:'row', flex:4}}>
          <View style={{height:130, width:'80%', backgroundColor: '#FFFFFF',borderRadius: 30,marginTop: 0}}>
            <View style={{marginTop: 20, marginLeft: 40, flexDirection:'row', }}>
                  <TouchableOpacity style={styles.outter}
                  onPress={() => {setMood(CARD)}}>
                      {mood === CARD? <View style={styles.inner}></View> : null}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.outter2}>
                    <Image
                      source={require('./image/Thu.png')}
                      style={{marginLeft: 6, marginTop: 8}} />
                  </TouchableOpacity>
                  <Text style={{marginLeft: 20, fontSize: 14,fontWeight:'400', color:'#000000'}}>Card</Text>

            </View>
            <Image 
                source={require('./image/Line3.png')}
                style={{marginLeft: 40}}/>
            <View style={{marginTop: 20, marginLeft: 40, flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.outter}
                  onPress={() => {setMood(BANK_ACCOUNT)}}>
                      {mood ===BANK_ACCOUNT? <View style={styles.inner}></View>: null}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.outter1}>
                    <Image
                      source={require('./image/Nha.png')}
                      style={{marginLeft: 6, marginTop: 8}} />
                  </TouchableOpacity>
                  <Text style={{marginLeft: 20, fontSize: 14,fontWeight:'400', color:'#000000'}}>Bank account</Text>
            </View>
            <Image 
                source={require('./image/Line3.png')}
                style={{marginLeft: 40}}/>
            <View style={{marginTop: 20, marginLeft: 40, flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.outter}
                  onPress={() => {setMood(PAYPAL)}}>
                      {mood ===PAYPAL? <View style={styles.inner}></View>: null}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.outter3}>
                    <Image
                      source={require('./image/Pay.png')}
                      style={{marginLeft: 6, marginTop: 8}} />
                  </TouchableOpacity>
                  <Text style={{marginLeft: 20, fontSize: 14,fontWeight:'400', color:'#000000'}}>Paypal</Text>
            </View>
          </View>
          </View>
      </View>
      
      

      <View style={{flex:2}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 100, borderRadius: 20}}>
              <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Updatet</Text>
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