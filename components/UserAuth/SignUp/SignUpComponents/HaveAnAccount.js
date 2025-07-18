import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HaveAnAccount = () => {
    return (
        <TouchableOpacity>
            <Text style={{ color: 'darkslategray', textDecorationLine: 'underline' }}>Already have an account?</Text>
        </TouchableOpacity>
    )
}

export default HaveAnAccount