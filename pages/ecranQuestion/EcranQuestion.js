import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Image, View } from "react-native";
import Addition from "../../components/addition/Addition";
import Soustraction from "../../components/soustraction/Soustraction";
import Multiplication from "../../components/multiplication/Multiplication";
import Division from "../../components/division/Division";
import spacy from "../../assets/spacy.gif";

const EcranQuestion = (props) => {
  const [choix, setChoix] = useState();
  const [prochain, setProchain] = useState();

  useEffect(() => {
    const { choix, prochain } = props.route.params;
    setChoix(choix);
    setProchain(prochain);
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <Image source={spacy} resizeMode="cover" style={styles.giphyy} />
      {choix == "Addition" && (
        <Addition
          navigation={props.navigation}
          route={props.route}
          prochain={prochain}
        />
      )}
      {choix == "Soustraction" && (
        <Soustraction
          navigation={props.navigation}
          route={props.route}
          prochain={prochain}
        />
      )}
      {choix == "Multiplication" && (
        <Multiplication
          navigation={props.navigation}
          route={props.route}
          prochain={prochain}
        />
      )}
      {choix == "Division" && (
        <Division
          navigation={props.navigation}
          route={props.route}
          prochain={prochain}
        />
      )}
    </View>
  );
};

export default EcranQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  giphyy: {
    position: "absolute",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});
