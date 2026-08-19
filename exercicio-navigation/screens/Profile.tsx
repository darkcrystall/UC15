import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          U
        </Text>
      </View>

      <Text style={styles.name}>
        User
      </Text>

      <Text style={styles.email}>
        user@email.com
      </Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab dicta nihil et ipsum quisquam sit perspiciatis esse accusantium. Laudantium enim incidunt ea nulla nesciunt voluptatem facilis, esse corrupti veniam.
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
  },

  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#444",
    width: "60%"
  },
});