import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({ name, placeholder }) => {
    return (
        <View style={{ width: '99%', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
            <View style={{ width: '30%', alignItems: 'center' }}>
                <Text style={{ paddingRight: 10, color: 'darkslategray' }}>{name}</Text>
            </View>
            <TextInput style={{ width: '60%', borderRadius: 20, paddingLeft: 20, borderColor: 'darkslategray', borderWidth: 1 }} placeholder={placeholder} />
        </View>
    )
}

export default InputBox