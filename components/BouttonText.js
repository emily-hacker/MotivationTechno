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
    columnGap: 10,
    margin: 10,
  },

  button: {
    height: 65,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "rgba(79,115,189,0.5)",
  },

  texty: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6689DC",
  },
});
