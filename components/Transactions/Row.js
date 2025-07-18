import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Row = ({ name }) => {
    return (
        <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '98%',
        backgroundColor: 'white',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 20,
        height: 70,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'darkslategray',
        borderWidth: 2

    },
    text: {
        fontSize: 20,
        color: 'darkslategray',
        paddingLeft: 10
    }
})

export default Row