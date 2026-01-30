import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        Your email :
      </ThemedText>
      <Spacer />
      <ThemedText>Time to read some books !</ThemedText>
      <Spacer />
    </ThemedView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
