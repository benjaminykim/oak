import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ onClick, height = 100, width = 100, color = "#fff" }) => {
  return (
    <Pressable
      style={[
        styles.button,
        { height: height, width: width, backgroundColor: Color },
      ]}
      onPress={onClick}
    >
      <Text>Button</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {},
  text: {},
});
