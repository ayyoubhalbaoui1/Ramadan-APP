import React, { useState } from "react";
import { StyleSheet, TextInput, ImageBackground, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import AppButton from "../../shared/components/AppButton";
import { BreakfastController } from "./controllers/breakfast-controller";
import { Breakfast } from "../../shared/models/breakfast.model";
import BackButton from "../../shared/components/BackButton";

export default function addBreakfast({ history }: any) {
  let breakfastController = new BreakfastController();

  const [city, setCity] = useState("");
  const [nbPlaces, setNbPlaces] = useState("");
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState({
    latitude: 32.29512789087331,
    longitude: -9.233774559186537,
  });

  function onRegionChange(region: any) {
    setRegion(region);
  }

  let coordinates_marker = {
    latitude: region.latitude,
    longitude: region.longitude,
  };

  function add() {
    let breakfast = new Breakfast();

    breakfast.city = city;
    breakfast.nbPlaces = Number(nbPlaces);
    breakfast.description = description;
    breakfast.latitude = Number(region.latitude);
    breakfast.longitude = Number(region.longitude);

    breakfastController.Add(breakfast);

    history.push("/home");
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <ImageBackground
      style={styles.imageBackground}
    >
       <Image
        style={styles.image}
        source={require("../../../assets/55426126-41491399.jpg")}
      />
   
      <BackButton
        onPress={() => {
          history.push("/home");
        }}
      />
    
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="City"
      />

      <TextInput
        style={styles.input}
        onChangeText={setNbPlaces}
        value={nbPlaces}
        placeholder="Places Number"
      />

      <TextInput
        multiline
        numberOfLines={3}
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description"
      />

 
        
      <AppButton
        title="Add Breackfast "
        onPress={() => {
          add();
        }}
      />
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 60,
    width: "80%",
  },
  imageBackground: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "skyblue",
  },
   image: {
    top: "8%",
    width: "90%",
    height: "40%",
    justifyContent: "center",
    borderRadius: 0,
  },
 
});
