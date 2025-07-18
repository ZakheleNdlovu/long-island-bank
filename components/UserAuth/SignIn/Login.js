import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './LoginComponents/Header'
import InputBox from './LoginComponents/InputBox'
import SigninBt from './LoginComponents/SigninBt'
import SigninMessage from './LoginComponents/SigninMessage'
import Footer from './LoginComponents/Footer'
import DontHaveAnAcc from './LoginComponents/DontHaveAnAcc'

const Login = () => {
    return (
        <View style={{ height: '99%' }}>
            <Header />
            <View style={{ height: '33%' }}>
                <SigninMessage />
            </View>
            <View style={{ height: '35%', alignItems: 'center' }}>
                <InputBox name={'E-mail'} placeholder={'mzakesman@gmail.com'} />
                <InputBox name={'Password'} placeholder={'*********'} />
                <SigninBt />
                <DontHaveAnAcc />
            </View>
            <View style={{ height: '23%', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Footer />
            </View>

        </View>
    )
}

export default Login