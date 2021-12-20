import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Image } from 'react-native'
import Addition from '../../components/addition/Addition'
import Soustraction from '../../components/soustraction/Soustraction'
import Multiplication from '../../components/multiplication/Multiplication'
import Division from "../../components/division/Division"
import { GameLoop } from "react-native-game-engine"
import image from "../../assets/questionbg.jpg"
import explosion from "../../assets/explosion.gif"

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

const EcranQuestion = (props) => {
    const [choix, setChoix] = useState()
    const [prochain, setProchain] = useState()

    const [state, setState] = useState({
        x: WIDTH / 2 - RADIUS,
        y: HEIGHT / 2 - RADIUS
    })


    const [enemy, setEnemy] = useState({
        x: WIDTH / 2 - RADIUS,
        y: HEIGHT / 2 - RADIUS
    })



    const updateHandler = ({ touches, screen, layout, time }) => {
        let move = touches.find(x => x.type === "move");
        if (move) {
            setState({
                ...state,
                x: state.x + move.delta.pageX,
                y: state.y + move.delta.pageY
            });
            setEnemy({
                ...enemy,
                y: enemy.y - 1
            })
        }
    };
    useEffect(() => {
        const { choix, prochain } = props.route.params
        setChoix(choix)
        setProchain(prochain)
    }, [props.navigation])

    return (
        // <View style={styles.container}>

        //     {choix == 'addition' && <Addition />}
        //     {choix == 'soustraction' && <Soustraction />}

        // </View>
        // <ImageBackground source={image} resizeMode="cover" style={styles.image}>


        <GameLoop style={styles.container} onUpdate={updateHandler}>
            <Image source={explosion} resizeMode='cover' style={styles.giphyy} />
            {choix == 'Addition' && <Addition navigation={props.navigation} route={props.route} prochain={prochain} />}
            {choix == 'Soustraction' && <Soustraction navigation={props.navigation} route={props.route} prochain={prochain} />}
            {choix == 'Multiplication' && <Multiplication navigation={props.navigation} route={props.route} prochain={prochain} />}
            {choix == 'Division' && <Division navigation={props.navigation} route={props.route} prochain={prochain} />}

        </GameLoop>
        // </ImageBackground>
    )
}

export default EcranQuestion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    player: {
        position: "absolute",
        backgroundColor: "pink",
        width: RADIUS * 2,
        height: RADIUS * 2,
        borderRadius: RADIUS * 2
    },
    enemy: {
        position: "absolute",
        backgroundColor: "black",
        width: RADIUS * 2,
        height: RADIUS * 2,
        borderRadius: RADIUS * 2
    },
    image: {
        flex: 1,
        justifyContent: "center",

        alignItems: 'center',
        width: '100%'
    },
    giphyy: {
        position: 'absolute',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,

    }

})
