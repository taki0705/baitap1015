import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Image, FlatList, StyleSheet,ScrollView, TouchableOpacity,} from 'react-native';
import MapView from './MapView';

const data = [
    { id: '1', name: 'Houses', image: require('../assets/houses.png') },
  { id: '2', name: 'Apartments', image: require('../assets/Apartments.png') },
  { id: '3', name: 'Condos', image: require('../assets/Condos.png') },
  { id: '4', name: 'Land', image: require('../assets/Land.png') },
];

const Home = ({ navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
    
      <ScrollView  showsVerticalScrollIndicator={false} style={styles.scrollView1}>
      <View style={styles.header}>
        <Image style={{width:55,height:50,borderRadius:999}} source={require('../assets/21810310337.png')}/>
        <Text style={{fontSize:18,fontWeight:'bold',marginTop:10}}>Home</Text>
        <View style={{flexDirection:'row',gap:5}}>
        <Image style={{width:22,height:22}} source={require('../assets/Addnewbutton.png')}/>
        <TouchableOpacity  onPress={() => navigation.replace('MapView')}  >
        <Image style={{width:22,height:22}} source={require('../assets/Mapbutton.png')}/>
        </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{padding:10,fontSize:22,fontWeight:'bold'}}>Categories</Text>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={true}
      />
      <View>
        <Text style={{padding:10,fontSize:22,fontWeight:'bold'}}> Houses</Text>
      </View>
      <View>
        <View style={{flexDirection:'row',gap:10}}>
          <View>
        <ImageBackground style={{width:180,height:140}}  source={require('../assets/markus-spiske-37931-unsplash.png')}
        />
        <Text style={{fontSize:16,fontWeight:'bold'}}>One Mission Bay</Text>
        <Text style={{fontSize:12}}>San Francisco, CA</Text>
        </View>
        <View >
        <ImageBackground style={{width:180,height:140}}  source={require('../assets/andrew-neel-1354776-unsplash.png')}/>
        <Text style={{fontSize:16,fontWeight:'bold'}}>One Mission Bay</Text>
        <Text style={{fontSize:12}}>San Francisco, CA</Text>
        </View>
        </View>

        <View style={{flexDirection:'row',gap:10,marginTop:20}}>
          <View>
        <ImageBackground style={{width:180,height:140}}  source={require('../assets/christopher-jolly-616571-unsplash.png')}/>
        <Text style={{fontSize:16,fontWeight:'bold'}}>246 Sussex St</Text>
        <Text style={{fontSize:12}}>San Francisco, CA</Text>
        </View>
        <View >
        <ImageBackground style={{width:180,height:140}}  source={require('../assets/emile-guillemot-1205579-unsplash.png')}/>
        <Text style={{fontSize:16,fontWeight:'bold'}}>One Mission Bay</Text>
        <Text style={{fontSize:12}}>San Francisco, CA</Text>
        </View>
        </View>
       <View style={{alignItems: 'center',
    justifyContent:'center',marginTop:30}}>
        <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Show all (7)</Text>
      </TouchableOpacity>
      </View>
      </View>
      
      
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
   wrapper: {},
  container: {
    padding: 10,
    marginTop:20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop:10,
    marginRight:20,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  story: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 10,
    marginTop:20,
    alignItems: 'center',
   borderWidth:2,
   height:150,
   borderRadius:10,
   borderColor:'#E4E2E2',
  },
  image: {
    width: 120,
    height: 79,
  },
  button: {
    padding: 15,
    borderRadius: 10, 
    width: '90%',
    alignItems: 'center',
    justifyContent:'center',
    borderColor:'#20C065',
    borderWidth:2,
  },
  buttonText: {
    color: '#20C065', 
    fontSize: 18,
  }
});

export default Home;
