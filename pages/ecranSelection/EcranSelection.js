import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import BouttonText from "../../components/BouttonText";
import image from "../../assets/bg.jpg";

const EcranSelection = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text
          style={{
            color: " rgba(80,115,200, 0.6) ",
            fontSize: 30,
            fontWeight: "bold",
            position: "absolute",
            bottom: 550,
            left: 60,
          }}
        >
          Choose an option :
        </Text>
        <BouttonText
          texte="Meditation"
          onPress={() =>
            props.navigation.navigate("Retour au Menu", { choix: "Meditation" })
          }
        />
        <BouttonText
          texte="Diet"
          onPress={() =>
            props.navigation.navigate("Retour au Menu", {
              choix: "Diet",
            })
          }
        />
        <BouttonText
          texte="Positive Quotes"
          onPress={() =>
            props.navigation.navigate("Retour au Menu", {
              choix: "Positive quotes",
            })
          }
        />
        <BouttonText
          texte="Fitness"
          onPress={() =>
            props.navigation.navigate("Retour au Menu", { choix: "Fitness" })
          }
        />
      </ImageBackground>
    </View>
  );
};

export default EcranSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#845EC2",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
