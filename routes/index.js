import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabs from "../components/home/BottomTabs";
import LandingPage from "../screens/LandingPage";
import VerificationScreen from "../screens/VerificationScreen";
import NewPostScreen from "../screens/NewPostScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignupScreen}
        />
        <Stack.Screen
          name="Bio"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomTabs}
        />
        <Stack.Screen
          name="Verification"
          options={{ headerShown: false }}
          component={VerificationScreen}
        />
        <Stack.Screen
          name="NewPost"
          options={{ headerShown: false }}
          component={NewPostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
