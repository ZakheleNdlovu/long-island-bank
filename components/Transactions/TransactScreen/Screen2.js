import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import HeaderT from './HeaderT'

const Screen2 = () => {

    const route = useRoute()
    const { text } = route.params
    const navigation = useNavigation()

    if (text.toLowerCase() == 'buy airtime') {
        return (
            <View style={{ height: '100%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Network Provider </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='MTN' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Amount</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={styles.button}>
                        <Button title='BUY AIRTIME' color={'darkslategray'} onPress={() => Alert.alert('Error!', 'Unable to process transaction :(')} />
                    </View>
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </View>
        )
    }

    if (text.toLowerCase() == 'buy lte data') {
        return (
            <View style={{ height: '100%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Network Provider </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='MTN' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Amount (R1 = 2mb)</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={styles.button}>
                        <Button title='BUY DATA' color={'darkslategray'} onPress={() => Alert.alert('Error!', 'Unable to process transaction :(')} />
                    </View>
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </View>
        )
    }

    if (text.toLowerCase() == 'airtime advance') {
        return (
            <View style={{ height: '100%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Network Provider </Text>
                        </View>
                        <TextInput style={styles.input} placeholder='MTN' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Amount</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={styles.button}>
                        <Button title='GET AIRTIME ADVANCE' color={'darkslategray'} onPress={() => Alert.alert('Error!', 'Unable to process transaction :(')} />
                    </View>
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </View>
        )
    }

    if (text.toLowerCase() == '1voucher' || text.toLowerCase() == 'betway' || text.toLowerCase() == 'google playstore' || text.toLowerCase() == 'shoprite' || text.toLowerCase() == 'spotify' || text.toLowerCase() == 'hd movies') {
        return (
            <View style={{ height: '100%' }}>
                <HeaderT text={text} />
                <View style={styles.box1}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '30%', alignItems: 'flex-end' }}>
                            <Text style={styles.text2}>Amount</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='R' />
                    </View>
                    <View style={styles.button}>
                        <Button title='BUY VOUCHER' color={'darkslategray'} onPress={() => Alert.alert('Error!', 'Unable to process transaction :(')} />
                    </View>
                    <View style={styles.button}>
                        <Button title='BACK' color={'darkslategray'} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </View>
        )
    }

    else {
        return <Text>null</Text>
    }

}

const styles = StyleSheet.create({
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
        padding: 10,
        alignSelf: 'center'
    },
    input: {
        width: '60%',
        height: 45,
        borderRadius: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'darkslategray'
    },
    box1: {
        width: '99%',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: 'darkslategray',
        height: '93%',
        marginTop: '1%',
        padding: '3%',
        borderRadius: 10,
    },
})

export default Screen2