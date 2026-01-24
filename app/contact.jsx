import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
        <Link href="/" style={styles.link}>Back To Home Page</Link>
    </View>
  )
}

export default Contact

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