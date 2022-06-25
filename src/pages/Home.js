import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native'


const Home = ({navigation}) => {
    const [items, setItems] = useState([
        {
            id:12 ,
          description:"Lady with a red umbrella",
          imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            id: 34,
          description:"Flowers and some fruits",
          imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            id: 56,
          description:"Beautiful scenery",
          imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            id: 78,
          description:"Some kind of bird",
          imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
            id: 90,
          description:"The attack of dragons",
          imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
        
      ])

      const renderRow = ({item}) => {
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
    return(
        <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderRow}
          keyExtractor={(item,index) => `${item.id}${index}`}
          style={{ width: '100%' }}
        scrollEnabled={true}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
      fontSize: 24,
      color: '#000'
    },
    item:{
        padding: 3,
        borderColor: "#000",
        borderWidth: 1,
        margin: 3
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Home;