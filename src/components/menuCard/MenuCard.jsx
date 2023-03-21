import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuCard = (...props) => {
  return (
    <View
      style={[
        styles.card,
        props.height ? { height: props.height } : { height: 150 },
      ]}
    >
      {...props}
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({ card: {} });
