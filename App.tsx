import { StyleSheet, Text, View } from "react-native";
import { createURL } from "expo-linking";

export default function App() {
  const url = createURL("product", {});
  console.log("URL => ", url);

  return (
    <View style={styles.container}>
      <Text>Hello guys!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
