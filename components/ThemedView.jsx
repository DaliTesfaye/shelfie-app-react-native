import { StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style , safe = false , ...props  }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  )

  const inset = useSafeAreaInsets();

  return (
    <View style={[{ backgroundColor: theme.background, padding : inset.top , paddingBottom: inset.bottom }, style]} {...props} />  );
};

export default ThemedView;

const styles = StyleSheet.create({});
