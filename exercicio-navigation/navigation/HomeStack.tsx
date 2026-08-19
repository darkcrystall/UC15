import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Details from "../screens/Details";
import { Show } from "../components/Card";

const Stack = createNativeStackNavigator();

interface HomeStackProps {
  favorites: Show[];
  toggleFavorite: (show: Show) => void;
}

export default function HomeStack({
  favorites,
  toggleFavorite,
}: HomeStackProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shows">
        {(props) => (
          <Home
            {...props}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
}