import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";

function GoalItem({ text, id, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: colors.background }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    backgroundColor: colors.surface,
    borderRadius: 6,
  },
  goalText: {
    color: colors.dark,
    padding: 8,
  },
});
