import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Card = ({ acc_num }) => {

    const styles = StyleSheet.create({
        box: {
            width: '75%',
            height: 500,
            borderWidth: 1,
            borderColor: 'darkslategray',
            alignSelf: 'center',
            margin: 10,
            borderRadius: 10,
            overflow: 'hidden'
        },
        imgbg: {
            backgroundColor: 'black',
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            borderRadius: 8
        },
        font: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
        },
        header: {
            height: '25%',
            padding: 10,
            width: '100%',
            alignItems: 'flex-end'
        }
    })

    return (
        <TouchableOpacity>
            <View style={styles.box}>
                <ImageBackground source={require('../../../assets/images/oasis.png')} style={styles.imgbg} tintColor={'lightgreen'}>
                    <View>
                        <View style={styles.header}>

                        </View>
                        <View style={{ height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.font}>LONG ISLAND BANK</Text>
                        </View>
                        <View style={styles.header}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>MR A.P SUKINI</Text>
                            <Text style={{ fontSize: 21 }}>{acc_num}</Text>
                            <Text style={{ fontSize: 10 }}>savings account number</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default Card