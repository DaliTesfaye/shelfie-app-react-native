import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
        <Link href="/" style={styles.link}>Back to Home Page</Link>
    </View>
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