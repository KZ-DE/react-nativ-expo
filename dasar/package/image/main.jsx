import React from "react";
import { View, Image, StyleSheet } from "react-native";

export const MainApp = () => {
  return (
    <View>
      <Image style={tampilan.gambar} source={require("./a1.png")} />
    </View>
  );
};

const tampilan = StyleSheet.create({
  gambar: {
    width: 200,
    height: 200,
    resizeMode: "contain", // agar ke tengah
  },
});
