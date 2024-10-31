import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function App() {
  const [text, setText] = React.useState("");

  function handleChange(newText) {
    setText(newText);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> escriba aquí...</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChange}
      />
      <Text style={styles.title}> {text} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
  },
  input: {
    borderWidth: 1.5,
    width: 250,
    height: 50,
    borderRadius: 12,
    padding: 10,
  },
  title: {
    fontSize: 40,
    margin: 10,
    fontWeight: "bold",
    marginTop: 40,
  },
  text: {
    alignSelf: "flex-start",
    margin: 10,
    fontSize: 20,
  },
});
