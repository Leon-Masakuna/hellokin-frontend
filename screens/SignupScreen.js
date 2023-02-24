import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from "react-native-fontawesome";

const SignupScreen = ({ navigation }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const navigateToBio = () => {
    navigation.navigate("Bio");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const navigateBack = () => {
    navigation.navigate("SignUpPage");
  };

  const navigateToVerification = () => {
    navigation.navigate("Verification");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <FontAwesome
            icon={BrandIcons.github}
            onPress={navigateBack}
            style={styles.buttonIcone}
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
            secureTextEntry
          />
          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={(text) => setPassWord(text)}
            style={styles.input}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={navigateToVerification}
              style={styles.button}
            >
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
      </View>
    </ScrollView>
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
    paddingTop: 150,
    paddingBottom: 42,
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
    fontSize: 8,
  },
  colorText: {
    color: "#ffffff",
  },
  accountCreate: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    marginTop: 150,
  },
  inputContainer: {
    width: "80%",
    marginTop: -40,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 12,
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
    marginBottom: 50,
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
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  oRTextContainer: {
    alignSelf: "flex-end",
  },
  oRText: {
    color: "white",
  },
  backButton: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: -110,
  },
  buttonIcone: {
    textAlign: "left",
  },
});
