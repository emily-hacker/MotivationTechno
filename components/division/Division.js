import React, { useState, useEffect } from "react";
import {
  RecyclerViewBackedScrollViewBase,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { sauvegardeDonnee } from "../../utils/asyncStorage";

const nbAleatoire = (min, max) => {
  const nombre = Math.floor(Math.random() * (max - min + 1) + min);
  return nombre;
};

//hello

const Division = (props) => {
  const [somme, setSomme] = useState(undefined);
  const [nombre1, setNombre1] = useState(undefined);
  const [nombre2, setNombre2] = useState(undefined);
  const [nombre3, setNombre3] = useState(undefined);
  const [nombre4, setNombre4] = useState(undefined);
  const [randomListe, setRandomListe] = useState([]);
  const calcSomme = () => {
    let tempNombre1 = nbAleatoire(1, 100);
    let tempNombre2 = nbAleatoire(1, 10);

    /* Ici on vérifie TANT QUE tempNombre2 est PLUS GRAND que tempNombre1,
     * on re-donne une valeur à tempNombre1 et tempNombre2 pour être sûr de
     * pas avoir de 0.1234
     */
    while (tempNombre2 > tempNombre1) {
      tempNombre1 = nbAleatoire(1, 100);
      tempNombre2 = nbAleatoire(1, 10);
    }
    let tempSomme = tempNombre1 / tempNombre2;

    /* Ici on vérifie SI tempSomme est un nombre à virgule, Y A T IL plus de 2
     * chiffres après la virgule ? Si OUI, TANT QU'IL y à plus de 2 chiffres
     * après la virgule on re-donne une valeur aux tempNombre et on refait la
     * division! Comme ça on est sûr de pas avoir de nombre comme ça ##.### !
     */
    if (tempSomme.toString().split(".")[1]) {
      while (tempSomme.toString().split(".")[1].length > 2) {
        tempNombre1 = nbAleatoire(1, 100);
        tempNombre2 = nbAleatoire(1, 10);
        tempSomme = tempNombre1 / tempNombre2;
      }
    }
    let tempNombre3 = nbAleatoire(tempSomme - 10, tempSomme + 10);
    let tempNombre4 = nbAleatoire(tempSomme - 10, tempSomme + 10);
    setSomme(tempSomme);
    setNombre1(tempNombre1);
    setNombre2(tempNombre2);
    setNombre3(tempNombre3);
    setNombre4(tempNombre4);
  };

  const prochain = props.route.params.prochain;
  //executer le code chaque fois que [somme] va changer
  useEffect(() => {
    const onFocus = props.navigation.addListener("focus", () => {
      if (prochain) calcSomme();
    });

    if (!nombre3 && !nombre4 && !somme) {
      calcSomme();
    }

    const random = [nombre3, nombre4, somme];

    random.sort(() => Math.random() - 0.5);

    setRandomListe(random);
    return onFocus;
  }, [somme, prochain]);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {nombre1} ÷ {nombre2} = ?
      </Text>
      {/* <Button title='Sauvegarde' onPress={() => sauvegardeDonnee({ niveau: 1 }, 'niveau')} />
            <Button title='Lecture' onPress={() => verifieReponse(44)} /> */}
      <View style={styles.answerContainer}>
        {randomListe.map((nombre, idx) => {
          return (
            <TouchableOpacity
              style={styles.buttonContainer}
              key={`${nombre}-${idx}`}
              onPress={() =>
                props.navigation.navigate("Retour", {
                  reponse: nombre,
                  bonneReponse: somme,
                })
              }
            >
              <View style={styles.button}>
                <Text style={styles.texty}>{nombre}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Division;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  answerContainer: {
    flexDirection: "row",
  },

  gify: {
    height: 50,
    width: 50,
  },

  button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },

  ufo: {
    height: 80,
    width: 200,
    position: "absolute",

    left: 0,
  },

  texty: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#b0e0e6",
  },

  buttonContainer: {
    height: Dimensions.get("screen").height * 0.1,
    width: "33%",
  },
  question: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    color: "#b0e0e6",
    top: 40,
  },
});
