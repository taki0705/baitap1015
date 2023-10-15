import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const MapView = (navigation) => {

    const [textVisible, setTextVisible] = useState(false);

    const toggleTextVisibility = () => {
        setTextVisible(!textVisible);
    };
  return (
<View>  
  <View style={{marginTop:30}}>
  <Image soure={require('../assets/backarrow.png')}/> 
  <TouchableOpacity onpress={()=>navigation.goback()}>
  <Text style={{fontSize:20,color:'#20C065'}}>Back Home</Text>
  </TouchableOpacity>
  <View style={{alignItems:'center'}}>
  <Text style={{fontSize:20 ,fontWeight:'bold'}} >MapView</Text>
  </View>
  </View>
    <View style={{marginTop:30}}>
      <View>
      
      </View>
      <TouchableOpacity onPress={toggleTextVisibility}>
        <Image source={require('../assets/SanFranciscoMap.png')} style={{width:'100%'}}/>
        {textVisible && 
            <View style={styles.overlayText}>
                <Text style={{fontSize:17, color:'#4A4A4A',marginHorizontal:10,marginTop:10}}>1117 Ocean Ave #204 </Text>
                <Text style={{fontSize:13, color:'#4A4A4A',marginHorizontal:10,marginTop:10}}>The residences at Ocean Avenue West embody modern …</Text>
            </View>}

      </TouchableOpacity>
    </View>
    </View>  
  )
}

export default MapView
const styles= StyleSheet.create({
    overlayText: {
        position: 'absolute',
        color: 'white',
        backgroundColor:'#FFFFFF',
        top:'50%',
        left:18,
        borderRadius:10,
        paddingBottom:30,
        
    },
})
