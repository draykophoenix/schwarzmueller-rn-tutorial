import {
  Button,
  StyleSheet,
  View,
  TextInput,
  Modal,
  Image,
} from "react-native";
import colors from "../theme/colors";
import { useState } from "react";

function GoalInput({ onAddGoal, onCancel, isVisible }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    console.log("addGoalHandler()");
    setEnteredGoalText("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/target.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color={colors.highlight}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color={colors.tertiary} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: colors.surface,
  },
  image: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.surface,
    borderRadius: 4,
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
