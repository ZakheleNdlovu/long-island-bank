import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Transactions/Header'
import Card from './Cards/Card'

const Cards = () => {
    return (
        <View style={{ height: '100%' }}>
            <Header />
            <Text ></Text>
            <ScrollView style={{ overflow: 'hidden' }}>
                <Card acc_num={'4632309801'} />
            </ScrollView>
        </View>
    )
}

export default Cards