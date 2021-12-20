import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import BouttonText from '../../components/BouttonText'
import image from '../../assets/bg.jpg'


const EcranSelection = (props) => {
    return (
        <View style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={{ color: '#b0e0e6', fontSize: 30, fontWeight: "bold", position: 'absolute', bottom: 500, left: 30, }}>Choisissez un calcul :</Text>
                <BouttonText texte='Addition' onPress={() => props.navigation.navigate('Retour au Menu', { choix: 'Addition' })} />
                <BouttonText texte='Soustraction' onPress={() => props.navigation.navigate('Retour au Menu', { choix: 'Soustraction' })} />
                <BouttonText texte='Multiplication' onPress={() => props.navigation.navigate('Retour au Menu', { choix: 'Multiplication' })} />
                <BouttonText texte='Division' onPress={() => props.navigation.navigate('Retour au Menu', { choix: 'Division' })} />
            </ImageBackground>
        </View>
    )
}

export default EcranSelection


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#845EC2',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        flex: 1,
        justifyContent: "center",

        alignItems: 'center',
        width: '100%'
    },
    texty: {

        fontSize: 30,
        fontWeight: "bold",
        color: '#b0e0e6'

    },

});
