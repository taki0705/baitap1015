import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Add_review(){
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:10}}>
                <View style={styles.evaluate}>
                    <Image source={require('./screens/stargreen.png')}/>
                    <Image source={require('./screens/stargreen.png')}/>
                    <Image source={require('./screens/stargreen.png')}/>
                    <Image source={require('./screens/stargreen.png')}/>
                    <Image source={require('./screens/star.png')}/>
                </View>
                <Text style={styles.text}>We’ve visited this home last week and it’s a cozy house.</Text>
            </View>
            <View style={styles.btn}>
                <Button color={"green"} title="Add review"/>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        flex:1,
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    evaluate:{
        flexDirection:'row',
        marginBottom:10
    },
    text:{
        fontSize: 22
    },
    btn:{
        width:400,
    }

})