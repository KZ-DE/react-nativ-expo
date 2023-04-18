import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// dari package
// import { MainApp } from "./package/loading/Main";
// import { MainApp } from "./package/button/Main";
// jadi satu
// import { MainApp } from "./package/flatlist";
// import { Trial } from "./package/flatlist/trial";
// ------
// import { MainApp } from "./package/image/main";
import { MainApp } from "./package/imageBg/main";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Word</Text>
      <StatusBar style="auto" />
      <View>
        <MainApp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
