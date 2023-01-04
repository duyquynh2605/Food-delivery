import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from "react-native"
import line3 from '../image/Line3.png';
const CANCEL = 'CANCEL';
const HEIGHT_MODAL = 230;
const WIDTH = Dimensions.get('window').width;
const SimpleModal = (props) => {
    const [title, setTitle] = useState(CANCEL);
    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);

    }
    return(
        <TouchableOpacity 
            disabled={true}
            style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <TouchableOpacity style={{borderBottomWidth: 0.3,width:'100%',height: 40,}}>
                    <Text style={{marginLeft: 50,fontSize: 18,fontWeight:'bold' }}>
                        Please note
                    </Text>
                    </TouchableOpacity>
                <View style={{backgroundColor:'#FFFFFF'}}>
                <Text style={{fontSize: 13, marginLeft: 50, marginTop: 10}}>
                    DELIVERY TO MAINLAND
                    </Text>
                    <Text style={{fontSize: 15,marginLeft: 50, marginTop: 10,fontWeight:'bold'}}>N1000 - N2000</Text>
                    <Image source={line3}
                     style={{ marginLeft: 25, marginTop: 8}}/>
                    <Text style={{fontSize: 13, marginLeft: 50, marginTop: 10}}>
                    DELIVERY TO ISLAND
                    </Text>
                    <Text style={{fontSize: 15,marginLeft: 50, marginTop: 10,fontWeight:'bold'}}>N2000 - N3000</Text>
                </View>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity
                        style={{justifyContent:'center',alignItems:'center'}}
                        onPress={() => closeModal(false, 'Cancel')}>
                        <Text style={styles.text}>Cannel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor:"#FA4A0C",width: '50%', borderRadius: 20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize: 15}}>Proceed</Text>
                    </TouchableOpacity>
            </View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    modal: {
        height: HEIGHT_MODAL,
        paddingTop: 10,
        width: WIDTH - 80,
        backgroundColor: '#EDEDED',
        borderRadius: 10
    },
    textView: {
        flex: 1,
    },
    buttonsView: {
        width:'80%',
        flexDirection:'row',
        marginLeft: 28,
        // backgroundColor:'#FA4A0C',
        borderRadius: 20,
        height: 40,
        justifyContent:'space-between'
        
    },
    text: {
        fontSize: 15,
    }
})

export {SimpleModal}