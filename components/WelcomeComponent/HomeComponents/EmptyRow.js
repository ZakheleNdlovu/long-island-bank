import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const EmptyRow = ({ name, screen }) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(screen)}>
            <Text style={{ fontSize: 20, color: 'darkslategray' }}>{name}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '98%',
        flexDirection: 'row',
        height: 60,
        borderColor: 'darkslategray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        alignItems: 'center'
    }
})

export default EmptyRow