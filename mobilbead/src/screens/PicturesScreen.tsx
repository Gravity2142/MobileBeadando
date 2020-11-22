import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const PicturesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pictures</Text>
       <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a29bfe",
    alignItems: "center",
    justifyContent: "center",
  },
    tinyLogo: {
    width: 50,
    height: 50,
  },
});
