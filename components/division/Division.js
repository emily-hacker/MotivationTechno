import React, { useState, useEffect } from 'react'
import { RecyclerViewBackedScrollViewBase, StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { sauvegardeDonnee } from '../../utils/asyncStorage'

const nbAleatoire = (min, max) => {
    const nombre = Math.floor((Math.random() * (max - min + 1)) + min)
    return nombre
}

const Division = (props) => {



    const [somme, setSomme] = useState(undefined)
    const [nombre1, setNombre1] = useState(undefined)
    const [nombre2, setNombre2] = useState(undefined)
    const [nombre3, setNombre3] = useState(undefined)
    const [nombre4, setNombre4] = useState(undefined)
    const [randomListe, setRandomListe] = useState([])
    const calcSomme = () => {
        const tempNombre1 = nbAleatoire(1, 100)
        const tempNombre2 = nbAleatoire(1, 100)
        const tempSomme = tempNombre1 / tempNombre2
        const tempNombre3 = nbAleatoire(tempSomme - 10, tempSomme + 10)
        const tempNombre4 = nbAleatoire(tempSomme - 10, tempSomme + 10)
        setSomme(tempSomme)
        setNombre1(tempNombre1)
        setNombre2(tempNombre2)
        setNombre3(tempNombre3)
        setNombre4(tempNombre4)
    }

    const prochain = props.route.params.prochain
    //executer le code chaque fois que [somme] va changer 
    useEffect(() => {
        const onFocus = props.navigation.addListener('focus', () => {
            if (prochain) calcSomme()
        })

        if (!nombre3 && !nombre4 && !somme) {
            calcSomme()
        }

        const random = [nombre3, nombre4, somme]

        random.sort(() => Math.random() - 0.5)

        setRandomListe(random)
        return onFocus;
    }, [somme, prochain])




    return (
        <View style={styles.container}>
            <Text style={styles.question}>
                {nombre1} ÷ {nombre2} = ?
            </Text>
            {/* <Button title='Sauvegarde' onPress={() => sauvegardeDonnee({ niveau: 1 }, 'niveau')} />
            <Button title='Lecture' onPress={() => verifieReponse(44)} /> */}
            <View style={styles.answerContainer}>
                {randomListe.map((nombre) => {
                    return (<TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('Reponses', { reponse: nombre, bonneReponse: somme })}>
                        <LinearGradient style={styles.button} colors={['#9F4580', '#2a4b7c']} >
                            <Text style={styles.texty}>{nombre}</Text>
                        </LinearGradient>
                    </TouchableOpacity>)
                })}
            </View>
        </View >
    )
}

export default Division

const styles = StyleSheet.create({
    container: {
        flex: 1,
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


    },

    texty: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#b0e0e6'
    },

    buttonContainer: {

        width: '33%'
    },
    question: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold",
        color: '#b0e0e6'

    }

})
