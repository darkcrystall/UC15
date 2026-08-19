import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export interface Show {
  id: number;
  name: string;
  genres: string[];
  premiered: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
}

interface CardProps {
  show: Show;
  onDetails: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
}

export default function Card({
  show,
  onDetails,
  onToggleFavorite,
  isFavorite,
}: CardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            show.image.original ??
            "https://picsum.photos/200",
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{show.name}</Text>

        <Text style={styles.genre}>
          {show.genres.join(", ")}
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={onDetails}
          >
            <Text style={styles.buttonText}>
              Information
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.favoriteButton,
              isFavorite && styles.favoriteButtonActive,
            ]}
            onPress={onToggleFavorite}
          >
            <Text style={styles.buttonText}>
              {isFavorite
                ? "Remove"
                : "Favorite"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },

  content: {
    padding: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  genre: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },

  detailsButton: {
    flex: 1,
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  favoriteButton: {
    flex: 1,
    backgroundColor: "#16a34a",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  favoriteButtonActive: {
    backgroundColor: "#dc2626",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});