import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Product } from "../pages/Product";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}
