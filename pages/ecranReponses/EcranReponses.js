import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import gif from "../../assets/explosion.gif";
import bravo from "../../assets/bravo.gif";

const EcranReponses = (props) => {
  const [correcte, setCorrecte] = useState(false);

  const { reponse, bonneReponse } = props.route.params;

  const verifieReponse = () => {
    if (reponse == bonneReponse) {
      setCorrecte(true);
    } else setCorrecte(false);
  };

  useEffect(() => {
    verifieReponse();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexGrow: 1 }}></View>
      {correcte ? (
        <Image style={styles.gify} source={bravo} />
      ) : (
        <Image style={styles.gify} source={gif} />
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{ width: 100, marginVertical: 5 }}
          onPress={() =>
            props.navigation.navigate("Retour au Menu", {
              choix: "addition",
              prochain: true,
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.texty}>Prochain</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 100, marginVertical: 5 }}
          onPress={() =>
            props.navigation.navigate("Retour au Menu", {
              choix: "addition",
              prochain: false,
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.texty}>Reessayer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EcranReponses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: 65,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },

  texty: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b0e0e6",
  },
  gify: {
    position: "absolute",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});
