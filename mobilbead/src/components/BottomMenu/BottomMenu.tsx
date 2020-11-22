import React from "react";
import { createBottomTabNavigator, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBar } from "./TabBar";
import { HomeScreen } from "../../screens/HomeScreen";
import { QuestionScreen } from "../../screens/QuestionScreen";
import { SecretScreen } from "../../screens/SecretScreen";
import { PicturesScreen } from "../../screens/PicturesScreen";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";

export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, position: "relative"}}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="question" component={QuestionScreen} />
        <Tab.Screen name="profile" component={SecretScreen} />
        <Tab.Screen name="picture" component={PicturesScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};
