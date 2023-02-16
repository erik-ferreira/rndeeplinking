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
        path: "product/:id",
        parse: {
          id: (id: string) => id,
        },
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
