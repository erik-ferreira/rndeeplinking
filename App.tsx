import { createURL, useURL } from "expo-linking";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const redirectURL = useURL();

  const url = createURL("product", {});
  console.log("URL => ", url);

  return (
    <View style={styles.container}>
      <Text>URL - {redirectURL}</Text>
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
