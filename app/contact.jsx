import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={[styles.title]}>Contact Page</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back to Home Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecorationLine: "underline",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "maroon",
  },
});
