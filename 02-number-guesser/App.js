import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import colors from "./theme/color";

export default function App() {
  return (
    <View style={styles.background}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
