import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

export const MainApp = () => (
  <View style={[styles.container, styles.horizontal]}>
    {/* indikator standar */}
    <ActivityIndicator />

    {/* indikator sedang */}
    <ActivityIndicator size="large" />
    <ActivityIndicator size={"small"} color="yellow" />
    <ActivityIndicator color={"black"} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "center",
    justifyContent: "row",
    padding: 10,
  },
});
