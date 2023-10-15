import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Item from '../components/Item'

const DATA = [
    {
        src: require('../assets/markus-spiske-37931-unsplash.png'),
        tit: 'One Mission Bay',
        desc: 'San Francisco, CA',
    },
    {
        src: require('../assets/andrew-neel-1354776-unsplash.png'),
        tit: '1410 Steiner St',
        desc: 'San Francisco, CA',
    },
    {
        src: require('../assets/christopher-jolly-616571-unsplash.png'),
        tit: '246 Sussex St',
        desc: 'San Francisco, CA',
    },
    {
        src: require('../assets/emile-guillemot-1205579-unsplash.png'),
        tit: '1206 Market St',
        desc: 'San Francisco, CA',
    },
    {
        src: require('../assets/deborah-cortelazzi-615800-unsplash1.png'),
        tit: '1206 Market St',
        desc: 'San Francisco, CA',
    },
    {
        src: require('../assets/michael-browning-246513-unsplash.png'),
        tit: '1206 Market St',
        desc: 'San Francisco, CA',
    },
]

const SavedItem = () => {
  return (
    <View style={{marginTop: 44}}>
      <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 700}}>SavedItem</Text>
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap',marginTop: 12, marginHorizontal: 6}}>
            {DATA.map((item, ind)=>
                <View key={ind} style={{width: '50%', padding: 6}}>
                    <Item item={item}/>
                </View>
            )}
        </View>
      </ScrollView>
    </View>
  )
}

export default SavedItem