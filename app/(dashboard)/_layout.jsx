import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/colors";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DashnoardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          height: 90,
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen name="profile" options={{ title: "Profile" , tabBarIcon:({focused}) => (<Ionicons name={focused ? "person" : "person-outline"} color={focused ? theme.iconColorFocused : theme.iconColor} size={24} />)} } />
      <Tabs.Screen name="books" options={{ title: "Books" , tabBarIcon:({focused}) => (<Ionicons name={focused ? "book" : "book-outline"} color={focused ? theme.iconColorFocused : theme.iconColor} size={24} />) }} />
      <Tabs.Screen name="create" options={{ title: "Create" , tabBarIcon:({focused}) => (<Ionicons name={focused ? "create" : "create-outline"} color={focused ? theme.iconColorFocused : theme.iconColor} size={24} />)}} />
    </Tabs>
  );
};

export default DashnoardLayout;

const styles = StyleSheet.create({});
