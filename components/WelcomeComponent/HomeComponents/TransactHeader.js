import { View, Text } from 'react-native'
import React from 'react'

const TransactHeader = ({ name }) => {
    return (
        <View style={{ width: '99%', backgroundColor: 'darkslategray', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
        </View>
    )
}

export default TransactHeader