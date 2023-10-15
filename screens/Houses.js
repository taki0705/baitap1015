import { FlatList } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';


const DATA =[
    {
        img: require('./screens/markus-spiske-37931-unsplash.png'),
        address: 'One Mission Bay',
        time: '14 days ago',
        city: 'San Francisco, CA',
        price: '$2,950,000'
    },
    {
        img: require('./screens/andrew-neel-1354776-unsplash.png'),
        address: '1410 Steiner St',
        time: '9 days ago',
        city: 'San Francisco, CA',
        price: '$3,279,000'
    },
    {
        img: require('./screens/christopher-jolly-616571-unsplash.png'),
        address: '246 Sussex St',
        time: '7 days ago',
        city: 'San Francisco, CA',
        price: '$1,259,000'
    },
    {
        img: require('./screens/emile-guillemot-1205579-unsplash.png'),
        address: '1206 Market St',
        time: '2 hours ago',
        city: 'San Francisco, CA',
        price: '$379,000'
    },
    
    {
        img: require('./screens/michael-browning-246513-unsplash.png'),
        address: '463 Eureka St',
        time: '4 days ago',
        city: 'San Francisco, CA',
        price: '$3,795,000'
    },
]

const Item = ({item}) => {
    return(
        <View style={styles.container}>
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
        </View>
    )
}

export default function Houses(){
    return(
            <FlatList 
                data={DATA}
                renderItem={Item}/>
    )
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:16,
        flexDirection:'row',
        alignItems:'flex-end',
        marginTop:30
    },
  });