import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../WelcomeComponent/Home'
import Balance from '../WelcomeComponent/Balance'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Notifications from '../Notifications/Notifications'
import Cards from '../Cards/Cards'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Transact from '../Transactions/Transact'
import Life from '../WelcomeComponent/LifeCover/Life'
import Invest from '../WelcomeComponent/Equities/Invest'
import Screen from '../Transactions/TransactScreen/Screen'


const Stack = createStackNavigator()
const Bottom = createBottomTabNavigator()

function StackNavigator1() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='BalanceScreen' component={Balance} options={{ headerShown: false }} />
            <Stack.Screen name='LifeCover' component={Life} options={{ headerShown: false }} />
            <Stack.Screen name='Equity' component={Invest} options={{ headerShown: false }} />
            <Stack.Screen name='Transact_opt' component={Screen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function TransactStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Transact' component={Transact} options={{ headerShown: false }} />
            <Stack.Screen name='Transact_opt' component={Screen} options={{ headerShown: false }} />
            <Stack.Screen name='BalanceScreen' component={Balance} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function BottomNavigator() {
    return (
        <Bottom.Navigator screenOptions={{ headerShadowVisible: false, tabBarInactiveBackgroundColor: 'darkslategray', tabBarActiveBackgroundColor: 'darkslategray', tabBarActiveTintColor: 'white' }}>
            <Bottom.Screen name='Home' component={StackNavigator1} options={{ headerShown: false, tabBarIcon: () => <Image source={require('../../assets/images/earth.png')} width={'100%'} height={10} style={{ width: 23, height: 22, }} /> }} />
            <Bottom.Screen name='Transact' component={TransactStack} options={{ headerShown: false, tabBarIcon: () => <Image source={require('../../assets/images/coins.png')} width={'100%'} height={10} style={{ width: 23, height: 22, }} /> }} />
            <Bottom.Screen name='Notifications' component={Notifications} options={{ headerShown: false, tabBarIcon: () => <Image source={require('../../assets/images/calendar.png')} width={'100%'} height={10} style={{ width: 23, height: 22, }} /> }} />
            <Bottom.Screen name='Virtual Card' component={Cards} options={{ headerShown: false, tabBarIcon: () => <Image source={require('../../assets/images/card-play.png')} width={'100%'} height={10} style={{ width: 23, height: 22, }} /> }} />
        </Bottom.Navigator>
    )
}

const Navigators = () => {
    return (
        <NavigationContainer>
            <BottomNavigator />
        </NavigationContainer>
    )
}

export default Navigators