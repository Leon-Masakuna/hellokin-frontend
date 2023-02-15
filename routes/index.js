import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SignupScreen from "../screens/SignupScreen";
import BiographyScreen from "../screens/BiographyScreen";
import BottomTabs from "../components/BottomTabs";
import SignUpPage from "../screens/SignUpPage";
import VerificationPageScreen from "../screens/VerificationPageScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpPage">
        <Stack.Screen
          name="SignUpPage"
          options={{ headerShown: false }}
          component={SignUpPage}
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
          component={BiographyScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomTabs}
        />
        <Stack.Screen
          name="Verification"
          options={{ headerShown: false }}
          component={VerificationPageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});