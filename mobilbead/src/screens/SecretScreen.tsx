import React , { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export const SecretScreen = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {setSwitchValue(value);};



  return (
    <View style={styles.container}>
      <Text>Secret</Text>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      <Text>{switchValue ? 'Ez egy Titkos szöveg amit nem láthat mindenki!' : ''}</Text>
    </View>
  );
};

export default SecretScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74b9ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
