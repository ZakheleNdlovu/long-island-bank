import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Transactions/Header'

const Life = () => {
    return (
        <View style={{ height: '100%', width: '98%' }}>
            <Header />
            <Text style={{ alignSelf: 'center', padding: 10 }}>Life cover unavailable at the moment</Text>
        </View>
    )
}

export default Life