import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../../screens/HomeScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fca80a",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: "#041C2E",
          position: "absolute",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeApp"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mastermind"
        component={HomeScreen}
        options={{
          tabBarLabel: "Mastermind",
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="chat" color={color} size={size} />
            <Ionicons name="md-chatbubble" size={24} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Journal"
        component={HomeScreen}
        options={{
          tabBarLabel: "Journal",
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="library" color={color} size={size} />
            <MaterialIcons name="my-library-books" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <Ionicons name="md-notifications-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Offres"
        component={HomeScreen}
        options={{
          tabBarLabel: "Offres d'emplois",
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="menu" color={color} size={size} />
            <MaterialIcons name="menu" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
