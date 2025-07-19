import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Box from './Box'


const Transact = () => {
    return (
        <View style={{ height: '100%' }}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '90%' }}>
                <Box text={'CHECK BALANCES'} />
                <Box text={'BUY PREPAID MOBILE'} />
                <Box text={'BUY ELECTRICITY'} />
                <Box text={'TRANSFER MONEY'} />
                <Box text={'PAY BENEFICIARY'} />
                <Box text={'LOANS'} />
                <Box text={'VOUCHERS'} />
                <Box text={'EQUITIES'} />
            </ScrollView>
        </View>
    )
}

export default Transact