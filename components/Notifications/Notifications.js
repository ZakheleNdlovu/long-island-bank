import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'

const Notifications = () => {
    return (
        <View style={{ height: '100%' }}>
            <Header />
            <View style={styles.box}>
                <Text>Notifications</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'darkslategray',
        width: '98%',
        height: '92%',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 10
    }
})

export default Notifications