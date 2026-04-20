import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button} from "react-native";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [justGoals, setJustGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setJustGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    setJustGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={justGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 8,
  },
});
