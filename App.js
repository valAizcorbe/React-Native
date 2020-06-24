import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 15,
    width: "80%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
