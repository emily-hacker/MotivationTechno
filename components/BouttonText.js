import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BouttonText = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.texty}>{props.texte}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BouttonText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  button: {
    height: 65,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },

  texty: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#b5e0e5",
  },
});
