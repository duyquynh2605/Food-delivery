import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { SimpleModal } from "./components/SimpleModal";


const CARD = 'CARD';
const BANK_ACCOUNT = 'BANK_ACCOUNT';
const  DOOR_DELIVERY = 'DOOR_DELIVERY'
const PICK_UP = 'PICK_UP';
const Man14 = () => {
    const [mood, setMood] = useState(CARD);
    const [mooe, setMooe] = useState(DOOR_DELIVERY);
    const [isModalVisible, setisModalVisible] = useState(false)
    const [chooseData, setchooseData] = useState();

    const changeModalVisible = (bool) => {
            setisModalVisible(bool)
    }
    const setData = (data) => {
      setchooseData(data);
    }
     return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',flex:1,width:'50%',marginLeft: 40}}>
          <Image
              source={require('./image/Vector.png')} 
        />
          <Text style={{fontSize: 18, fontWeight: '600',color:'#000000'}}>Checkout</Text>
      </View>
      <View style={{flex:6,justifyContent:'space-between'}}>
      <View>
        <Text style={{fontSize: 34, marginLeft: 30, color:'#000000',fontWeight:'600'}}>Payment</Text>
        <Text style={{fontSize: 17,color:'#000000',fontWeight:'600',marginLeft: 30,marginTop: 10}}>Payment method</Text>
      </View>
      <View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{ width: '80%', backgroundColor: '#FFFFFF',borderRadius: 30,paddingBottom:50,paddingTop: 30}}>
            <View style={{ marginLeft: 40, flexDirection:'row'}}>
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
          </View>
        </View>

        <Text style={{fontSize: 17,color:'#000000',fontWeight:'600',marginTop: 20,marginLeft:30}}>Payment method</Text>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{ width: '80%', backgroundColor: '#FFFFFF',borderRadius: 30,marginTop: 20,paddingBottom:50}}>
        <View style={{marginTop: 20, marginLeft: 40, flexDirection:'row'}}>
                <TouchableOpacity style={styles.outter}
                onPress={() => {setMooe(DOOR_DELIVERY)}}>
                    {mooe === DOOR_DELIVERY? <View style={styles.inner}></View> : null}
                </TouchableOpacity>
                <Text style={{marginLeft: 20, fontSize: 14,fontWeight:'400', color:'#000000'}}>Door delivery</Text>
          </View>
          <Image 
              source={require('./image/Line3.png')}
              style={{marginLeft: 40}}/>
          <View style={{marginTop: 20, marginLeft: 40, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.outter}
                onPress={() => {setMooe(PICK_UP)}}>
                    {mooe ===PICK_UP? <View style={styles.inner}></View>: null}
                </TouchableOpacity>
                <Text style={{marginLeft: 20, fontSize: 14,fontWeight:'400', color:'#000000'}}>Pick up</Text>
          </View>
        </View>
        </View>
      </View>

      <View style={{justifyContent:'center',flexDirection:'row',marginTop: 20}}>
        <View style={{flexDirection: 'row',justifyContent:'space-between',width:'80%'}}>
          <Text style={{}}>Total</Text>
          <Text style={{fontSize: 17, fontWeight: '400',color: '#000000'}}>23000</Text>
        </View>
      </View>
      </View>

      <View style={{flex: 1}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 20, borderRadius: 20}}
          onPress={() => changeModalVisible(true)}>
              <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Proceed to payment</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}>
            <SimpleModal
              changeModalVisible={changeModalVisible}
              setData={setData} /> 
          </Modal>
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
      marginTop: -15
    }
  });
  
  export default Man14;