import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Balance = ({ name, bal }) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('BalanceScreen', { name: name, bal: bal })}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'darkslategray' }}>{bal}</Text>
            <Text style={{ color: 'darkslategray' }}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderBottomColor: 'gray',
        alignSelf: 'center',
        marginBottom: 4
    }
})

export default Balance