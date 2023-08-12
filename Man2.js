import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import logo from './image/Logo.png';

const LOGIN = 'LOGIN';
const SIGN_UP = 'SIGN_UP';
const Man2 = () => {
    const [page, setPage] = useState(LOGIN);
    return(
        <View style={styles.container}>
            <View style={{height: '40%',backgroundColor:'#FFFFFF',borderBottomStartRadius:20,borderBottomEndRadius:20,alignItems:'center',justifyContent:'center'}}>
                <View>
                    <Image source={logo}/>
                </View>
                <View style={{height:50,width:'80%',flexDirection:'row'}}>
                    <TouchableOpacity style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}
                        onPress={() => {setPage(LOGIN)}}>
                        <Text style={{fontSize:15,color:'#000',fontWeight:'bold'}}>Login</Text>
                        {page === LOGIN ? <View style={{position:'absolute',bottom:0,height: 3, width:'100%',backgroundColor:'#FA4A0C'}}></View> : null}
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}
                        onPress={() =>{setPage(SIGN_UP)}}>
                        <Text style={{fontSize:15,color:'#000',fontWeight:'bold'}}>Sign-up</Text>
                        {page === SIGN_UP ? <View style={{position:'absolute',bottom:0,height: 3, width:'100%',backgroundColor:'#FA4A0C'}}></View> : null}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'80%'}}>
                    <Text>Email address</Text>
                    <TextInput style={{borderBottomWidth:0.3}}></TextInput>
                </View>
                <View style={{width:'80%'}}>
                    <Text>Password</Text>
                    <TextInput style={{borderBottomWidth:0.3}}
                        secureTextEntry={true}></TextInput>
                </View>
                <View style={{width:'80%'}}>
                    <Text style={{color:'#FA4A0C',fontWeight:'bold',marginTop:20}}>Forgot passcode?</Text>
                </View>
                

            </View>

            <View style={{}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 100, borderRadius: 20}}>
                    <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Login</Text>
                </TouchableOpacity>
            </View>
          
       
        </View> 
    )
};



//commit
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Man2;