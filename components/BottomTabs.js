import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import Notifications from "./Notifications";

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeApp"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Hello'Talks"
        component={HomeScreen}
        options={{
          tabBarLabel: "Hello'Talks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Bibliothèques"
        component={HomeScreen}
        options={{
          tabBarLabel: "Bibliothèques",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="library" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="E-Shop"
        component={HomeScreen}
        options={{
          tabBarLabel: "E-Shop",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Paramètres"
        component={HomeScreen}
        options={{
          tabBarLabel: "Paramètres",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
