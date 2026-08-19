import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card, { Show } from "../components/Card";

interface FavoritesProps {
  navigation: any;
  favorites: Show[];
  toggleFavorite: (show: Show) => void;
}

const Favorites = ({
  navigation,
  favorites,
  toggleFavorite,
}: FavoritesProps) => {
  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No favorites yet
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          show={item}
          isFavorite={true}
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

export default Favorites;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 18,
    color: "#666",
  },
});