import * as React from 'react';

import { View, Text,Image, StyleSheet } from 'react-native'



const Details = ({ navigation, route }) => {
console.log("data", route?.params?.data)
    return (

        <View style={styles.container}>
<Image 
source={{uri: route?.params?.data.imageUrl}}
style={styles.image}
/>
<Text>{route?.params?.data.description}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    },
    image: {
        width: '100%',
        height: 200
    }
})


export default Details;