import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const win = Dimensions.get('window');
  const ratio = win.width / 200;
  const [items, setItems] = useState([
    {
      id: 12,
      description: "Lady with a red umbrella",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 34,
      description: "Flowers and some fruits",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 56,
      description: "Beautiful scenery",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 78,
      description: "Some kind of bird",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 90,
      description: "The attack of dragons",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }

  ])

  const renderRow = ({ item }) => {
    console.log("item", item)
    return (
      <View style={styles.item}>
        <Button
          title={item.description}
          onPress={() =>
            navigation.navigate('Details', { data: item })
          }
        />
      </View>
    );
  }
  return (
    //   <View style={styles.container}>
    //   <FlatList
    //     data={items}
    //     renderItem={renderRow}
    //     keyExtractor={(item,index) => `${item.id}${index}`}
    //     style={{ width: '100%' }}
    //   scrollEnabled={true}
    //   />
    // </View>
    <View style={styles.container}>
      {/* <Image  source = {require("../assets/images/login_banner.jpeg")}/> */}
      {/* <View style={styles.imageView}>
<ImageBackground source={require("../assets/images/login_banner.jpeg")} resizeMode="cover" style={styles.image}></ImageBackground>
</View> */}
  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 10 }}>
          <Text style={styles.fitnessHeader}>Fitness You Wanna Have</Text>
          <Image
            source={require("../assets/images/header_image.jpeg")}
            style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center', display: 'flex' }}
          />
        </View>
      <View style={{  flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
      
        <Image
          source={require("../assets/images/login_banner.jpeg")}
          style={{ width: 200, height: 200, alignItems: 'center', justifyContent: 'center', display: 'flex' }}
        />
      </View>
      <View style={styles.mainCardView}>
        <Text style={styles.plLoginTxt}>Please Login</Text>

        <View style={styles.inputIcon}>
          <Icon style={styles.searchIcon} name="envelope" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputIcon}>
          <Icon style={styles.searchIcon} name="lock" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.fcView}>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Details?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Create account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitBtn}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Details')
        }
        >
        <Icon
          name="arrow-circle-right"
          size={40}
          color='#493886'
          />
          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f1f6'
  },
  fitnessHeader:{
fontWeight:'bold',
fontSize:20,
width: 110
  },
  imageView: {
    width: '100%'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  mainCardView: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    padding: 20,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },
  plLoginTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },
  textInputView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  fcView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10
  },
  forgot_button: {

  },
  submitBtn:{
    position: 'absolute',
    bottom:-15,
    right: '50%'
  }
});

export default Home;