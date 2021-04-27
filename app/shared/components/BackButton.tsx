import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function BackButton({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Go Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  appButtonContainer: {
    backgroundColor: "#FFF",
    width: "20%",
    position: "absolute",
    left: 0,
    marginTop: 784,
  },
  appButtonText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
