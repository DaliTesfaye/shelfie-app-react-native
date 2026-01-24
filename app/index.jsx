import { StyleSheet, Text, View , Image} from "react-native";
import Logo from "../assets/img/Logo.png";
import { Link, Stack } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      
      <Image source={Logo} style={styles.logo} />

      <Text style={styles.title}>The number 1</Text>
      <Text style={{ marginTop: 10 }}>Reading List App</Text>

      <View style={styles.card}>
        <Text>Hello This is Card.</Text>
      </View>

      <Link href="/about" style={styles.link}>Go To About Page</Link>
      <Link href="/contact" style={styles.link}>Go To Contact Page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "maroon",
  },
  card: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  link : {
      textDecorationLine: 'underline',
      marginVertical: 10,
  }
});