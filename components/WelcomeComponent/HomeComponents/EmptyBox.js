import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const EmptyBox = ({ text }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Transact_opt', { text: text })}>
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