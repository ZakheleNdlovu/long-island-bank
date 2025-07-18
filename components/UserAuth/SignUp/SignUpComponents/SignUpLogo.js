import { View, Text, Image } from 'react-native'
import React from 'react'

const SignUpLogo = () => {
    return (
        <View style={{ height: '100%', width: '99%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'darkslategray' }}>SIGN UP</Text>
            <Image source={require('../../../../assets/images/leak.png')} width={'20%'} height={'100%'} tintColor={'darkslategray'} style={{ width: '15%', height: '30%' }} />
        </View>
    )
}

export default SignUpLogo