import { StyleSheet, View } from "react-native";

import Todo from "./Todo/Todo";

export default function App() {
  return (
    <View style={{ flexDirection: "column", margin: 20 }}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({});
