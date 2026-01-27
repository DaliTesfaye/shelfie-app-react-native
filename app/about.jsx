import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.container, {backgroundColor : theme.background}]}>
      <ThemedText style={[styles.title, {color: theme.text}]}>About Page</ThemedText>
        <Link href="/" style={styles.link}>
        <ThemedText>Back to Home Page</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
   container : {
        backgroundColor : 'white',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    link : {
        textDecorationLine: 'underline',
        marginVertical: 10,
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'maroon',
    }
})