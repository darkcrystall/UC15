import {
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Card, { Show } from "../components/Card";

interface HomeProps {
  navigation: any;
  favorites: Show[];
  toggleFavorite: (show: Show) => void;
}

const Home = ({
  navigation,
  favorites,
  toggleFavorite,
}: HomeProps) => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    async function loadShows() {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/shows"
        );

        const data: Show[] = await response.json();
        setShows(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadShows();
  }, []);

  return (
    <FlatList
      data={shows}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          show={item}
          isFavorite={favorites.some(
            (fav) => fav.id === item.id
          )}
          onDetails={() =>
            navigation.navigate("Details", {
              show: item,
            })
          }
          onToggleFavorite={() =>
            toggleFavorite(item)
          }
        />
      )}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});