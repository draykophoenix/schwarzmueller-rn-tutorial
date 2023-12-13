import { StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 4,
    backgroundColor: colors.surface,
    borderRadius: 6,
  },
  goalText: {
    color: colors.dark,
  },
});
