import { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export const MainApp = () => {
  const [isi, setisi] = useState("selamat pagi");
  return (
    <View style={css.tombol}>
      <View>
        <Button
          title="Klik me"
          onPress={() => {
            setisi("semangat pagi");
          }}
        />
      </View>
      <View>
        <Text>{isi}</Text>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  tombol: {
    // container
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "99vw",
    height: "99vh",
  },
  sebelum: {
    padding: 20,
  },
});
