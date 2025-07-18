import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SigninMessage = () => {

    const [color, setColor] = useState('darkslategray')
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'darkslategray' }}>SIGN IN</Text>
            <Image source={require('../../../../assets/images/leak.png')} width={'20%'} height={'100%'} tintColor={color} style={{ width: '20%', height: '30%' }} />
        </View>
    )
}

export default SigninMessage