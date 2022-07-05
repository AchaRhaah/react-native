import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import SelectAgency from "./screens/SelectAgency";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    lora: require("./assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    poppin: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    poppinSemiBold: require("./assets/fonts/Poppins-BoldItalic.ttf"),
    poppinMedium: require("./assets/fonts/Poppins-Medium.ttf"),
  });
};
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <SelectAgency />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
});
