import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Box1 = ({ text }) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.box} >
            <Text style={{ fontSize: 25, color: 'darkslategray', textAlign: 'center' }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '98%',
        height: 100,
        borderColor: 'darkslategray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 3,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

export default Box1