import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";

const linking = {
  prefixes: ["exp://192.168.1.9:19000/--/rndeeplinking"],
  config: {
    screens: {
      home: {
        path: "home",
      },
      product: {
        path: "product",
      },
    },
  },
};

export function AppRoutes() {
  return (
    <NavigationContainer linking={linking}>
      <StackRoutes />
    </NavigationContainer>
  );
}
