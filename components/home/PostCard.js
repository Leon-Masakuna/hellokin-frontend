import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Entypo,
  AntDesign,
  Feather,
  Octicons,
  Fontisto,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PostCard = () => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("Bio");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.identities}>
          <TouchableOpacity onPress={navigateToProfile}>
            <Image
              source={{
                uri: "https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512",
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.userNames}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Léon Masakuna</Text>
              <AntDesign name="checkcircle" size={14} color="#F49E1E" />
            </View>
            <View>
              <Text style={styles.dateText}>Oct, 22 à 14h</Text>
            </View>
          </View>
          <View style={styles.subscriptionButton}>
            <Text style={styles.subscriptionButtonText}>s'abonner</Text>
          </View>
        </View>
        <View style={styles.menuRight}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
      </View>
      <View style={styles.postedImage}>
        <Image
          source={{
            uri: "https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512",
          }}
          style={styles.imagePost}
        />
      </View>
      <View>
        <View style={styles.buttonsContainer}>
          <View style={styles.commentsButtonsContainer}>
            <View>
              <Feather name="heart" size={24} color="white" />
              <Text style={styles.whiteIconsText}>2,9M</Text>
            </View>
            <View style={styles.comment}>
              <Octicons name="comment" size={24} color="white" />
              <Text style={styles.whiteIconsText}>44K</Text>
            </View>
            <View>
              <Fontisto name="share" size={24} color="white" />
              <Text style={styles.whiteIconsText}>9K</Text>
            </View>
          </View>
          <View style={styles.buttonAcheter}>
            <Text style={styles.buttonAcheterText}>Acheter</Text>
          </View>
        </View>
        <Text style={styles.buttonText}>
          Découvrez kinshasa{"\n"}comme du jamais vu
        </Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2C2C2D",
    padding: 5,
    paddingBottom: 15,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  identities: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 50,
    alignSelf: "flex-end",
  },
  userNames: {
    marginLeft: 10,
    marginRight: 10,
  },
  dateText: {
    fontSize: 10,
    color: "white",
  },
  nameText: {
    color: "white",
    marginRight: 8,
  },
  postedImage: {
    height: 250,
    backgroundColor: "yellow",
  },
  subscriptionButton: {
    backgroundColor: "red",
    padding: 9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  subscriptionButtonText: {
    fontSize: 10,
    color: "white",
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 9,
    paddingLeft: 9,
  },
  commentsButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  whiteIconsText: {
    color: "white",
  },
  buttonText: {
    color: "white",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    paddingLeft: 9,
  },
  imagePost: {
    width: "100%",
    height: "100%",
  },
  comment: {
    marginLeft: 15,
    marginRight: 15,
  },
  buttonAcheter: {
    backgroundColor: "#F49E1E",
    borderRadius: 25,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAcheterText: {
    color: "white",
    fontSize: 12,
  },
});
