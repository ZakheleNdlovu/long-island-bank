import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HeaderT = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '98%',
        backgroundColor: 'darkslategray',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: '7%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default HeaderT