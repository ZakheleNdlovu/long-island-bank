import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './SignUpComponents/Header'
import SignUpLogo from './SignUpComponents/SignUpLogo'
import Text1 from './SignUpComponents/TextInput'
import SubmitButton from './SignUpComponents/SubmitButton'
import Footer from './SignUpComponents/Footer'
import HaveAnAccount from './SignUpComponents/HaveAnAccount'

const SignUp = () => {
    return (
        <>
            <Header />
            <View style={{ height: '25%' }}>
                <SignUpLogo />
            </View>
            <ScrollView style={{ height: '70%', width: '99%' }}>
                <Text1 name={'Name'} placeholder={' Mzakesman'} />
                <Text1 name={'Surname'} placeholder={' Curry'} />
                <Text1 name={'E-mail'} placeholder={'mzakesman@island.com'} />
                <Text1 name={'Date of Birth'} placeholder={' DD / MM / YYYY'} />
                <Text1 name={'Password'} placeholder={' **********'} />
                <Text1 name={'Confirm Password'} placeholder={' *********'} />
                <View style={{ width: '99%', alignItems: 'center', height: '20%', justifyContent: 'center' }}>
                    <SubmitButton />
                    <HaveAnAccount />
                </View>
                <View style={{ width: '99%', alignItems: 'center' }}>

                </View>
            </ScrollView>

        </>
    )
}

export default SignUp