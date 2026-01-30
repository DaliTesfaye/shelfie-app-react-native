
import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'

const Login = () => {

  const handleSubmit = async () => {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      
      <Spacer />
      <ThemedText style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <ThemedText style={{ color: '#f2f2f2' }}>Login</ThemedText>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8
  }
})
