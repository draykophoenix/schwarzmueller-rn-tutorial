import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../theme/color";
import { useState } from "react";

function StartGameScreen() {
  const [number, setNumber] = useState("");

  function handleNumberInput(text) {
    if (text.search(/^[0-9]*$/) !== -1) {
      setNumber(text);
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        value={number}
        onChangeText={handleNumberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <PrimaryButton color={colors.surfaceDarker}>Reset</PrimaryButton>
      <PrimaryButton color={colors.highlight}>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.surface,
    elevation: 4,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: colors.background,
    borderBottomColor: colors.background,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
