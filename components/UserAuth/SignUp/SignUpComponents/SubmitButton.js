import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = () => {
    return (
        <View style={{ padding: 15 }}>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', fontSize: 17 }}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 35,
        backgroundColor: 'darkslategray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        boxShadowColor: 'black',
        boxShadowOffset: { width: 0, height: 2 },
        boxShadowOpacity: 0.25,
        boxShadowRadius: 3.84,
        elevation: 5
    }
})

export default SubmitButton