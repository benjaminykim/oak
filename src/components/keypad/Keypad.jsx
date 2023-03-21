import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Keypad = ({ number, setState }) => (
  <Pressable
    onPress={() => {
      if (number === "X") {
        setState((oldarray) => [...oldarray.slice(0, -1)]);
      } else {
        setState((oldarray) => [...oldarray, number]);
      }
    }}
    style={{ marginHorizontal: 25, marginVertical: 25 }}
  >
    <Text
      style={{
        fontSize: 50,
        fontWeight: "700",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >{`${number}`}</Text>
  </Pressable>
);

export default function NumericalKeypad() {
  const [display, setDisplay] = useState([]);
  return (
    <View style={styles.container}>
      <View>
        <Text>{display.join("")}</Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View style={styles.row}>
          <Keypad number={1} setState={setDisplay} />

          <Keypad number={2} setState={setDisplay} />
          <Keypad number={3} setState={setDisplay} />
        </View>
        <View style={styles.row}>
          <Keypad number={4} setState={setDisplay} />
          <Keypad number={5} setState={setDisplay} />
          <Keypad number={6} setState={setDisplay} />
        </View>
        <View style={styles.row}>
          <Keypad number={7} setState={setDisplay} />
          <Keypad number={8} setState={setDisplay} />
          <Keypad number={9} setState={setDisplay} />
        </View>
        <View style={styles.row}>
          <Keypad number={"."} setState={setDisplay} />
          <Keypad number={0} setState={setDisplay} />
          <Keypad number={"X"} setState={setDisplay} />
        </View>
        <Pressable onPress={() => console.log(display)}>
          <Text>Console Log</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
