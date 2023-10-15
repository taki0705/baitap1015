import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';


const DATA =[
    {
        img: require('../assets/markus-spiske-37931-unsplash2.png'),
        address: 'One Mission Bay',
        time: '14 days ago',
        city: 'San Francisco, CA',
        price: '$2,950,000'
    },
    {
        img: require('../assets/andrew-neel-1354776-unsplash.png'),
        address: '1410 Steiner St',
        time: '9 days ago',
        city: 'San Francisco, CA',
        price: '$3,279,000'
    },
    {
        img: require('../assets/christopher-jolly-616571-unsplash.png'),
        address: '246 Sussex St',
        time: '7 days ago',
        city: 'San Francisco, CA',
        price: '$1,259,000'
    },
    {
        img: require('../assets/emile-guillemot-1205579-unsplash.png'),
        address: '1206 Market St',
        time: '2 hours ago',
        city: 'San Francisco, CA',
        price: '$379,000'
    },
    {
        img: require('../assets/michael-browning-246513-unsplash.png'),
        address: '463 Eureka St',
        time: '4 days ago',
        city: 'San Francisco, CA',
        price: '$3,795,000'
    },
    {
        img: require('../assets/Photo6.png'),
        address: '206 Ocean Ave #121',
        time: '2 days ago',
        city: 'San Francisco, CA',
        price: '$899,000'
    },
]

const Item = ({item}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={item.img}/>
            <View style={{
                flex:1,
                marginLeft:16,
                flexDirection:'row',
                alignItems:'flex-end',
                justifyContent:'space-between'
            }}>
                <View>
                    <Text style={{fontWeight: 600, marginBottom: 15, fontSize: 18}}>{item.address}</Text>
                    <Text>{item.time}</Text>
                    <Text>{item.city}</Text>
                </View>
                <Text>{item.price}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default function Search(){
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);
    return(
        <View style={{marginTop:50}}>
            <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{backgroundColor:'#E5E5E5', marginHorizontal:15}}
            />
            <FlatList 
            data={DATA}
            renderItem={Item}/>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:16,
        flexDirection:'row',
        alignItems:'flex-end',
        marginTop:10
    },
  });