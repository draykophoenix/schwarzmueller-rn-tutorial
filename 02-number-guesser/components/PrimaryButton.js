import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../theme/color";

function PrimaryButton({ children, color }) {
  function pressHandler() {}

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={[styles.buttonInnerContainer, { backgroundColor: color }]}
        onPress={pressHandler}
        android_ripple={{ color: true }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: colors.text,
    textAlign: "center",
    fontWeight: "bold",
  },
});
