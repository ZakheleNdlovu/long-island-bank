import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const EmptyBox = ({ text }) => {
    return (
        <TouchableOpacity style={styles.box}>
            <Text style={{ fontSize: 35, color: 'darkslategray' }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '48%',
        height: 150,
        borderColor: 'darkslategray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default EmptyBox