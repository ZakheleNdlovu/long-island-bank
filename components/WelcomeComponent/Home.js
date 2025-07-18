import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './HomeComponents/Header'
import Balance from './HomeComponents/Balance'
import EmptyBox from './HomeComponents/EmptyBox'
import TransactHeader from './HomeComponents/TransactHeader'
import EmptyRow from './HomeComponents/EmptyRow'

const Home = () => {
    return (
        <>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '90%', width: '100%', alignSelf: 'center' }}>
                <TouchableOpacity style={{ width: '100%', marginTop: 5 }}>
                    <TransactHeader name={'ACCOUNTS'} />
                </TouchableOpacity>
                <View style={styles.box}>
                    <View style={{ borderColor: 'gray', borderWidth: 2, height: 90, margin: 5, borderRadius: 10, borderStyle: 'dotted' }}>
                        <Balance name={'SAVINGS ACCOUNT'} bal={'R3 564,43'} />
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: 'darkslategray', width: '60%', alignSelf: 'center' }}>
                        <Balance name={'Car'} bal={'R43 330'} />
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: 'darkslategray', width: '60%', alignSelf: 'center', marginBottom: 2 }}>
                        <Balance name={'PS5 + GTA 6'} bal={'R7 340'} />
                    </View>

                </View>
                <View style={styles.ScrollContainer}>
                    <TransactHeader name={'Quick Transactions'} />
                    <EmptyBox text={'Buy Prepaid Mobile'} />
                    <EmptyBox text={'Buy Electricity'} />
                    <EmptyRow name={'Long-Island Life cover'} screen={'LifeCover'} />
                    <EmptyRow name={'Long-Island Equities'} screen={'Equity'} />
                    <EmptyBox text={'Pay Beneficiary'} />
                    <EmptyBox text={'Transfer Money'} />
                </View>
            </ScrollView>

        </>
    )
}


const styles = StyleSheet.create({
    box: {

        width: '98%',
        alignSelf: 'center',
        borderColor: 'darkslategray',
        borderWidth: 1,
        overflow: 'hidden',
        marginTop: 5,
        borderRadius: 10
    },
    ScrollContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 5,
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',

    }
})
export default Home