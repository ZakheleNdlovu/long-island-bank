import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DontHaveAnAcc = () => {
    return (
        <TouchableOpacity>
            <Text style={{ color: 'darkslategray', textDecorationLine: 'underline' }}>Don't have an account?</Text>
        </TouchableOpacity>


    )
}

export default DontHaveAnAcc