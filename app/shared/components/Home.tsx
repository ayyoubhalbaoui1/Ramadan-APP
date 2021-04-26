import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import AppButton from "./AppButton";

export default function Home({ history }: any) {
  return (
    <ImageBackground
      style={styles.imageBackground}
    >
      <AppButton
        title="Add Assistance Place"
        onPress={() => {
          history.push("/addAssist");
        }}
      />
      <AppButton
        title="Add Futor Place"
        onPress={() => {
          history.push("/addFutor");
        }}
      />
      <AppButton
        title="Show Assistances"
        onPress={() => {
          history.push("/getAssist");
        }}
      />
      <AppButton
        title="Show Futors"
        onPress={() => {
          history.push("/getFutor");
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: 'skyblue',
    height:'100%',
    justifyContent: 'center',
    padding: 25
  },
});
