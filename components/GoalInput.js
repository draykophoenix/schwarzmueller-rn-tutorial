import { Button, StyleSheet, View, TextInput } from "react-native";
import colors from "../theme/colors";
import { useState } from "react";

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add goal"
        onPress={addGoalHandler}
        color={colors.highlight}
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.dark,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.surface,
    borderRadius: 4,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
