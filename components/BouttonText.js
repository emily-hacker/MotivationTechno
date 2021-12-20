import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const BouttonText = (props) => {
    return (<TouchableOpacity onPress={props.onPress}>
        <LinearGradient style={styles.button} colors={['#9F4580', '#2a4b7c']}>
            <Text style={styles.texty}>{props.texte}</Text>
        </LinearGradient>

    </TouchableOpacity>)
}

export default BouttonText

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 5,

    },

    button: {

        height: 65,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderRadius: 5,
    },

    texty: {

        fontSize: 30,
        fontWeight: "bold",
        color: '#b0e0e6'
    },
})


