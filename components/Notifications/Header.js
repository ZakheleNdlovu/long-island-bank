import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ width: '98%', backgroundColor: 'darkslategray', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', height: '7%', justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Long Island Bank  </Text>
            <Image source={require('../../assets/images/oasis.png')} width={'100%'} height={'100%'} style={{ width: '8%', height: '100%' }} />
        </View>
    )
}

export default Header