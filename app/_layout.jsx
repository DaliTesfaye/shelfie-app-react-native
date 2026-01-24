import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const Rootlayout = () => {
  return (
      <Stack>
        <Stack.Screen name="index" options={{title : "Home"}} />
        <Stack.Screen name="about" options={{title : "About"}} />
        <Stack.Screen name="contact" options={{title : "Contact"}} />
      </Stack>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({});
