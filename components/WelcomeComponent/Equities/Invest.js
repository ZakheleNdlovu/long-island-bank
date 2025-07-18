import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Notifications/Header'

const Invest = () => {
    return (
        <View style={{ height: '100%' }}>
            <Header />
            <View style={{ width: '98%', alignSelf: 'center', padding: 10 }}>
                <Text style={{ alignSelf: 'center' }}>No existing investments found</Text>
            </View>
        </View>
    )
}

export default Invest