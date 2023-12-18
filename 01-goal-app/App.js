import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import colors from "./theme/colors";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModal, setIsModal] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setIsModal(false);
  }

  function cancelHandler() {
    setIsModal(false);
  }

  function deleteItemHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add a goal"
        color={colors.highlight}
        onPress={() => setIsModal(true)}
      />
      {
        <GoalInput
          {...{
            onAddGoal: addGoalHandler,
            onCancel: cancelHandler,
            isVisible: isModal,
          }}
        />
      }
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                {...{
                  text: itemData.item.text,
                  id: itemData.item.id,
                  onDeleteItem: deleteItemHandler,
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.tertiary,
  },
});
