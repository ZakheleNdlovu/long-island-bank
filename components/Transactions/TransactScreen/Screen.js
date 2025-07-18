import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import HeaderT from './HeaderT'
import { useNavigation, useRoute } from '@react-navigation/native'
import Balance from '../../WelcomeComponent/HomeComponents/Balance'
import { Button } from 'react-native'
import Box from '../Box'
import Box1 from './Box1'

const Screen = () => {

    const route = useRoute()
    const { text } = route.params
    const navigation = useNavigation()


    if (text.toLowerCase() == 'check balances') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box}>
                    <View style={styles.row}>
                        <Balance name={'SAVINGS ACCOUNT'} bal={'R3 564,43'} />
                    </View>
                    <View style={styles.row}>
                        <Balance name={'CAR ACCOUNT'} bal={'R43 330'} />
                    </View>
                    <View style={styles.row}>
                        <Balance name={'PS5 + GTA 6 ACCOUNT'} bal={'R7 340'} />
                    </View>


                </View>

            </View>
        )
    }

    function Prepaid({ name }) {
        return (
            <TouchableOpacity style={styles.row}>

                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        )
    }

    if (text.toLowerCase() == 'buy prepaid mobile') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box}>
                    <Prepaid name={'BUY AIRTIME'} />
                    <Prepaid name={'BUY LTE DATA'} />
                    <Prepaid name={'AIRTIME ADVANCE'} />
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>

            </View>
        )
    }

    if (text.toLowerCase() == 'buy electricity') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Meter no. </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='445327678565' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Amount </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>

                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>

            </View>
        )
    }

    if (text.toLowerCase() == 'transfer money') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Recepient Bank </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='e.g Absa' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Recepient Account Number </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='e.g. 197765330' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Amount </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Reference </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='e.g. Bongani S' />
                    </View>

                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>

            </View>
        )
    }

    if (text.toLowerCase() == 'pay beneficiary') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Recepient Bank </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='e.g Absa' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Recepient Account Number </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='e.g. 197765330' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Amount </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Reference </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='e.g. Bongani S' />
                    </View>

                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>

            </View>
        )
    }

    if (text.toLowerCase() == 'loans') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Source of income</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='e.g Work' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Monthly income</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Loan amount</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Check Loan eligibility' color={'darkslategray'} onPress={() => Alert.alert('Error!', 'Sorry, we ran into a problem while verifying your loan, please try again later')} />
                    </View>
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>

            </View>
        )
    }

    if (text.toLowerCase() == 'vouchers') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <Box1 text={'1VOUCHER'} />
                    <Box1 text={'BETWAY'} />
                    <Box1 text={'GOOGLE PLAYSTORE'} />
                    <Box1 text={'SHOPRITE'} />
                    <Box1 text={'SPOTIFY'} />
                    <Box1 text={'HD MOVIES'} />
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>

            </View>
        )
    }

    if (text.toLowerCase() == 'easy equities') {
        return (
            <View style={{ height: '99%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <Text>No investments found.</Text>
                    <View style={styles.button}>
                        <Button title='Set up an investment plan' color={'darkslategray'} onPress={() => Alert.alert('Error❌', 'We have ran into an unkown error, please try again later')} />
                    </View>
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: '98%',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: 'darkslategray',
        height: '93%',
        marginTop: '1%',
        borderRadius: 10,

    },
    box1: {
        width: '98%',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: 'darkslategray',
        height: '93%',
        marginTop: '1%',
        borderWidth: 1,
        borderRadius: 10,
    },
    row: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'darkslategray',
        borderRadius: 10,
        margin: 1,
        alignItems: 'center',
        height: '8%',
        justifyContent: 'center',
        height: 100
    },
    text: {
        fontSize: 20,
        color: 'darkslategray'
    },
    text2: {
        fontSize: 18,
        color: 'darkslategray',
        textAlign: 'right'
    },
    button: {
        padding: 10
    },
    input: {
        width: '60%',
        height: 45,
        borderRadius: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'darkslategray'
    }
})

export default Screen