import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Show } from "./components/Card";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  const [favorites, setFavorites] = useState<Show[]>([]);

  function toggleFavorite(show: Show) {
    const alreadyFavorite = favorites.some(
      (fav) => fav.id === show.id
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter(
          (fav) => fav.id !== show.id
        )
      );
    } else {
      setFavorites([
        ...favorites,
        show,
      ]);
    }
  }

  return (
    <NavigationContainer>
      <TabNavigator
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </NavigationContainer>
  );
}