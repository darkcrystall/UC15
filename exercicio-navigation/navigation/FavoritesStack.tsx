import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorites from "../screens/Favorites";
import Details from "../screens/Details";
import { Show } from "../components/Card";

const Stack = createNativeStackNavigator();

interface FavoritesStackProps {
  favorites: Show[];
  toggleFavorite: (show: Show) => void;
}

const FavoritesStack = ({
  favorites,
  toggleFavorite,
}: FavoritesStackProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites">
        {(props) => (
          <Favorites
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
};

export default FavoritesStack;