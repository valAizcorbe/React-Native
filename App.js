import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [title, setTitle] = useState("This is Val App jiji");

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.funText}> This is a fun text</Text>
      <Button
        title="Change Text"
        onPress={() => setTitle("Text changed! juju")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  funText: {
    backgroundColor: "red",
    fontWeight: "bold",
    color: "#fff",
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
