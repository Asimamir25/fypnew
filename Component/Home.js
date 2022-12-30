import { View, Text,StyleSheet,TouchableOpacity,Alert,ScrollView,Image} from 'react-native'
import React from 'react'
import { back } from 'react-native/Libraries/Animated/Easing'

const Home = ({navigation}) => {

    const submt=()=>{
  
        {navigation.navigate("About")}
      }
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity
          style={styles.button}
          onPress={()=>submt()}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>

          <ScrollView horizontal={true} style={{margin:12,}}>
          <Image
          style={styles.tinyLogo}
          source={require('../assets/as.png')}
        />
        <Text style={styles.textStyle}>babar</Text>


<Image
          style={styles.tinyLogo}
          source={require('../assets/as.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/as.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/as.png')}
        /><Image
        style={styles.tinyLogo}
        source={require('../assets/as.png')}
      /><Image
      style={styles.tinyLogo}
      source={require('../assets/as.png')}
    /><Image
    style={styles.tinyLogo}
    source={require('../assets/as.png')}
  /><Image
  style={styles.tinyLogo}
  source={require('../assets/as.png')}
/><Image
          style={styles.tinyLogo}
          source={require('../assets/as.png')}
        /><Image
        style={styles.tinyLogo}
        source={require('../assets/as.png')}
      /><Image
      style={styles.tinyLogo}
      source={require('../assets/as.png')}
    />
            </ScrollView>
          <ScrollView horizontal={true} style={{margin:19}}>

          
            

          <View style={{width:110,height:100,backgroundColor:'red',}}></View>
          <View style={{width:80,height:100,backgroundColor:'black',}}></View>
          <View style={{width:80,height:100,backgroundColor:'blue',}}></View>
          <View style={{width:80,height:100,backgroundColor:'pink',}}></View>
          <View style={{width:80,height:100,backgroundColor:'orange',}}></View>
          <View style={{width:80,height:100,backgroundColor:'red',}}></View>



        </ScrollView>



    </View>
  )
}
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#1D8ED9",
        padding: 20, 
        borderRadius:29,
    
      
       
      },
      tinyLogo: {
        width: 100,
        height: 90,
        marginLeft: 10, 
        borderRadius:11,
      },
      textStyle: {
        position: 'absolute',
        bottom: 30,
        justifyContent: 'center',
        left: 20,
        fontSize:20,
        alignItems: 'center',
      }
});

export default Home