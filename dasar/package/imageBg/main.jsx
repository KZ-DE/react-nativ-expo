import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

export const MainApp = () => {
  return (
    <View>
      <ImageBackground style={sty.gambar} source={require("../image/a1.png")}>
        <Text>Hello word</Text>
      </ImageBackground>
    </View>
  );
};
const sty = StyleSheet.create({
  gambar: {
    width: 200,
    height: 200,
  },
});
