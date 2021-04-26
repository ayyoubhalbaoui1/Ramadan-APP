import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AppButton({ onPress, title }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    alignItems: "center",
    backgroundColor: "#B50045",
    padding: 10,
    marginTop: 45,
    borderRadius: 30,
  },
  appButtonText: {
    fontSize: 16,
    color: "white",
    
  },
});
