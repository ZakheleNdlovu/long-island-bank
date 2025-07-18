import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Balance = () => {

    const route = useRoute()
    const { name, bal } = route.params
    return (
        <>
            <View style={styles.box} >
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'darkslategray' }}>{name}</Text>
                <Text style={{ color: 'darkslategray', fontSize: 50 }}>{bal}</Text>

            </View>
            <View style={{ height: '5%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkslategray', textDecorationLine: 'underline' }}>Account history</Text>
            </View>
            <ScrollView style={{ width: '99%', padding: 10 }}>
                <Text style={{ alignSelf: 'center' }}>Failed to load history, try again later</Text>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '99%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignSelf: 'center',
        marginBottom: 4,
        height: '30%'
    }
})

export default Balance