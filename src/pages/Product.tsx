import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";

interface RoutesProps {
  id: string;
}

export function Product() {
  const route = useRoute();
  const { id } = route.params as RoutesProps;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Id do produto = {id}</Text>
    </View>
  );
}
