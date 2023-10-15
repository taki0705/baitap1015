import { View, Text, ScrollView } from 'react-native'
import CateItem from '../components/CateItem'
const DATA = [
    {
        src: require('../assets/markus-spiske-37931-unsplash.png'),
        tit: 'Houses'
    },
    {
        src: require('../assets/deborah-cortelazzi-615800-unsplash.png'),
        tit: 'Apartments'
    },
    {
        src: require('../assets/man-pan-400429-unsplash.png'),
        tit: 'Condos'
    },
    {
        src: require('../assets/federico-respini-314377-unsplash.png'),
        tit: 'Land'
    },
    {
        src: require('../assets/simon-moore-671404-unsplash.png'),
        tit: 'Buildings'
    },
    {
        src: require('../assets/christopher-rusev-1203303-unsplash.png'),
        tit: 'Town Houses'
    },
]
const Categories = () => {
  return (
    <View style={{flex: 1, width: '100%', marginTop: 44}}>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 700}}>Categories</Text>
      <ScrollView>
        <View style={{gap: 12, paddingHorizontal: 12, marginVertical: 14}}>
            {DATA.map((item, ind) => 
                <CateItem item = {item} />)}
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories;