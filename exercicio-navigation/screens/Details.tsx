import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Details = ({ route }: any) => {
  const { show } = route.params;

  const description = show.summary
    ? show.summary.replace(/<[^>]+>/g, "")
    : "No description available";

  const year = show.premiered
    ? show.premiered.split("-")[0]
    : "No release year available";

  const rating = show.rating?.average
    ? show.rating.average
    : "No rating available";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: show.image?.original,
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {show.name}
      </Text>

      <Text style={styles.genre}>
        {show.genres.length > 0
          ? show.genres.join(", ")
          : "No genre available"}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Release Year
        </Text>

        <Text style={styles.value}>
          {year}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Rating
        </Text>

        <Text style={styles.value}>
          {rating}
        </Text>
      </View>

      <Text style={styles.descriptionTitle}>
        Description
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  genre: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  infoContainer: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    color: "#666",
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
  },

  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
});