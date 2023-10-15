import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

const CateItem = ({item}) => {
  return (
    <TouchableOpacity style={{width: '100%'}}>
        <ImageBackground style={{height: 110, justifyContent: 'center', alignItems: 'center'}} source={item.src}>
                <Text style={{color: '#fff', fontWeight: 700, fontSize: 22}}>{item.tit}</Text>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default CateItem