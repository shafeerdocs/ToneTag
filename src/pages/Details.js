import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';



const Details = () => {
    const [segments, setSegments] = useState(['Daily', 'Weekly', 'Monthly', 'Yearly'])
    const [active, setActive] = useState(segments[0])
    return (

        <View style={styles.container}>

            <Text style={styles.headerText}>My Activities</Text>

            <View style={styles.inputIcon}>
                <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.segView}>
                {segments.map((seg, index) => (
                    <View key={index} style={[active === seg ? styles.activeColor : '']}>
                        <TouchableOpacity
                            onPress={() => setActive(seg)}
                        >
                            <Text style={[active === seg ? styles.segText : '']}>{seg}</Text>
                        </TouchableOpacity>
                    </View>


                ))}
            </View>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
            <View style={styles.cardView}>
                <View style={[styles.mainCardView, styles.cardBig]}></View>
                <View style={[styles.mainCardView]}></View>
            </View>
            <View style={styles.cardView}>
                <View style={[styles.mainCardView,  styles.gradColor]}></View>
                <View style={[styles.mainCardView, styles.cardBig]}></View>
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
    headerText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    image: {
        width: '100%',
        height: 200
    },
    cardView:{
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-around',
width: '50%'
    },
    inputIcon: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 15
    },
    searchIcon: {
        padding: 10,
    },
    segView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    activeColor: {
        backgroundColor: '#493886',
        padding: 5,
        borderRadius: 10,
        color: '#fff',

    },
    segText: {
        color: '#fff'
    },
    mainCardView: {
        height: 100,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 10,
        padding: 20,
        
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    },
    cardBig:{
        height: 150
    },
    gradColor:{
        backgroundColor: '#493886',
    }
})


export default Details;