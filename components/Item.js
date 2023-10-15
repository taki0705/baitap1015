import { View, Text, Image } from 'react-native'

const Item = ({item}) => {
  return (
    <View style={{gap: 8, marginBottom: 12}}>
        <View>
            <Image style={{width: '100%', height: 140}} source={item.src}/>
            <View style={{position: 'absolute', right: 6, top: 6}}>
                <Image source={require('../assets/icons8-heart-filled-500.png')}/>
            </View>
        </View>
        <View style={{gap: 6}}>
            <Text style={{fontSize: 18, fontWeight: 600}}>{item.tit}</Text>
            <Text>{item.desc}</Text>
        </View>
        <View>
            <Image source={require('../assets/Stars.png')}/>
        </View>
    </View>
  )
}

export default Item