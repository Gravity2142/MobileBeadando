import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const QuestionScreen = () => {
  const [value, onChangeText] = React.useState('Mi a titkod?');
  return (
    <View style={styles.container}>
      <Text>Question</Text>
       <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#81ecec",
    alignItems: "center",
    justifyContent: "center",
  },
});
