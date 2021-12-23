import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, Dimensions } from 'react-native'
import image from '../../assets/questionbg.jpg'
import gif from '../../assets/explosion.gif'
import bravo from '../../assets/bravo.gif'

// test github vs code
//allo

const EcranReponses = (props) => {

    const [correcte, setCorrecte] = useState(false)

    const { reponse, bonneReponse } = props.route.params

    const verifieReponse = () => {
        if (reponse == bonneReponse) {
            console.log('Bravo!')
            setCorrecte(true)
        }
        else
            setCorrecte(false)
        { console.log('OOPS') }
    }

    useEffect(() => {
        verifieReponse()
    }, [])

    return (
        <View style={styles.container}>

            {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}

            <View style={{ flexGrow: 1, }}></View>

            {/* <Text style={{ color: 'white', flexGrow: 1, }}>{correcte ? "BRAVO!" : "OOPS!"}</Text> */}
            {correcte ? <Image style={styles.gify} source={bravo} /> : <Image style={styles.gify} source={gif} />}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                <TouchableOpacity style={{ width: 100, marginVertical: 5 }} onPress={() => props.navigation.navigate('Retour au Menu', { choix: 'addition', prochain: true })}>
                    <View style={styles.button} >
                        <Text style={styles.texty}>Prochain</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 100, marginVertical: 5 }} onPress={() => props.navigation.navigate('Retour au Menu', { choix: 'addition', prochain: false })}>
                    <View style={styles.button} >
                        <Text style={styles.texty}>Reessayer</Text>

                    </View>
                </TouchableOpacity>


            </View>
            {/* <Text>Reponse: {reponse}</Text> */}
            {/* <Text>Bonne Reponse: {bonneReponse}</Text> */}

            {/* </ImageBackground> */}
        </View >
    )
}

export default EcranReponses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    answerContainer: {
        flexDirection: 'row',

    },

    button: {
        height: 65,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(52, 52, 52, 0.6)'


    },

    texty: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#b0e0e6'
    },

    buttonContainer: {

        width: '33%'
    },
    gify: {
        position: 'absolute',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },

    image: {
        flex: 1,
        justifyContent: "center",

        alignItems: 'center',
        width: '100%'
    },
})
