import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_dark.png";
import { Link, Stack } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.container}>
        <ThemedLogo />
        <Spacer height={20} />

        <ThemedText style={styles.title} title={true}>The number 1</ThemedText>
        <Spacer />
        <ThemedText>Reading List App</ThemedText>

        {/* <View style={styles.card}>
          <ThemedText>Hello This is Card.</ThemedText>
        </View> */}

        <Link href="/about" style={styles.link}>
          <ThemedText>Go To About Page</ThemedText>
        </Link>
        <Link href="/contact" style={styles.link}>
          <ThemedText>Go To Contact Page</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
  },
  card: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  link: {
    textDecorationLine: "underline",
    marginVertical: 10,
  },
});
