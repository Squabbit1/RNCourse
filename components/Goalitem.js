import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalsBoxes}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onLongPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalsInList}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsBoxes: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalsInList: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "red",
  },
});
