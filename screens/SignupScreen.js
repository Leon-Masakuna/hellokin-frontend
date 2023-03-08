import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { USER_SIGNUP_ROOT } from "@env";

const SignupScreen = ({ navigation }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };
  const navigateBack = () => {
    navigation.navigate("SignUpPage");
  };

  const onClick = () => {
    Alert.alert("User created successfully");
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phoneOrEmail: phoneOrEmail,
      fullName: fullName,
      userName: userName,
      password: password,
    }),
  };

  const createNewUser = async () => {
    try {
      await fetch(USER_SIGNUP_ROOT, requestOptions).then((response) => {
        response.json().then((data) => {
          Alert.alert("User created successfully");
          console.log("User data : ", data);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Feather
          onPress={navigateBack}
          name="arrow-left"
          size={24}
          color="#fca80a"
        />
      </View>
      <Text style={styles.accountCreate}>Créez un compte</Text>
      <View style={styles.appleFbLogoContainer}>
        <View style={styles.facebookContainer}>
          <Image
            source={require("../assets/FacebookLogo.png")}
            style={styles.image}
          />
          <Text style={styles.appleFacebookLogoText}>
            Se connecter avec facebook
          </Text>
        </View>
        <View style={styles.oRTextContainer}>
          <Text style={styles.oRText}> OU </Text>
        </View>
        <View style={styles.facebookContainer}>
          <Image
            source={require("../assets/appleLogo.jpg")}
            style={styles.image}
          />
          <Text style={styles.appleFacebookLogoText}>
            Se connecter avec apple
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Numéro de téléphone ou adresse email"
            value={phoneOrEmail}
            onChangeText={(text) => setPhoneOrEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Nom complet"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Nom d'utilisateur"
            value={userName}
            onChangeText={(text) => setUserName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={(text) => setPassWord(text)}
            style={styles.input}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={createNewUser} style={styles.button}>
              <Text style={styles.buttonText}>s'inscrire</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              En vous inscrivant, vous acceptez {"\n"} nos conditions
              d'utilisation et notre {"\n"} politique de confidentialité
            </Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>
              Vous avez un compte ?{" "}
              <Text onPress={navigateToLogin} style={styles.colorText}>
                Connectez-vous
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  viewContainer: {
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fca80a",
    paddingTop: 50,
  },
  textContainer: {
    paddingLeft: 70,
    paddingRight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
  },
  colorText: {
    color: "#ffffff",
  },
  accountCreate: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 120,
    marginBottom: 10,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 25,
    height: 35,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  button: {
    backgroundColor: "#ffffff",
    width: "60%",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: -30,
    marginTop: -20,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "#7c7c7c",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  bottomTextContainer: {
    marginTop: 70,
    marginBottom: -20,
  },
  bottomText: {
    textAlign: "center",
  },
  appleFbLogoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    marginTop: 20,
    marginBottom: 5,
  },
  appleFacebookLogoText: {
    fontSize: 9,
    marginLeft: 15,
    marginRight: 15,
    color: "white",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
  },
  facebookContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  oRTextContainer: {
    alignSelf: "flex-end",
  },
  oRText: {
    color: "white",
  },
  backButton: {
    marginLeft: 20,
    backgroundColor: "white",
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 50,
  },
  buttonIcone: {
    textAlign: "left",
  },
  scrollContainer: {
    height: "100%",
    width: "100%",
  },
});
