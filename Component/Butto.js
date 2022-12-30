import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const Butto = () => {
  const [first, onChangeFirstName] = React.useState("");
  const [last, onChangeLast] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [image, setImage] = useState(null);
  const [Type, setType] = React.useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      // extract the filetype
      setType(result.uri.substring(result.uri.lastIndexOf(".") + 1));
      setImage(result.uri);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 0,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/signup.jpg")}
        />
      </View>
      <View style={{}}>
        <Image
          style={{
            width: 90,
            height: 93,
            position: "relative",

            left: 150,

            top: 70,
          }}
          source={require("../assets/logo.png")}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            height: 560,
            marginTop: 50,
            width: 370,
            backgroundColor: "#F9F6EE",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderColor: "green",
            marginLeft: 6,
            //   position: "absolute",
          }}
        >
          <View
            style={{
              height: 230,
              alignItems: "center",
              justifycontent: "center",
              marginBottom: 15,
              padding: 1,
            }}
          >
            <SafeAreaView style={{ marginBottom: 10 }}>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    color: "#22262D",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Enter First Name
                </Text>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={onChangeFirstName}
                value={first}
                placeholder="Enter First Name"
              />

              <View
                style={{
                  marginTop: 0.9,
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    color: "#22262D",
                    fontSize: 15,
                    marginTop: 1,
                    fontWeight: "bold",
                  }}
                >
                  Enter Mobile Number
                </Text>
              </View>
              <View style={{ marginTop: 0.3 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Enter Mobile Number"
                  keyboardType="numeric"
                  secureTextEntry={true}
                />
              </View>

              <View
                style={{
                  marginTop: 0.9,
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    color: "#22262D",
                    fontSize: 15,
                    marginTop: 1,
                    fontWeight: "bold",
                  }}
                >
                  Enter Password
                </Text>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Enter Password"
              />
              <View
                style={{
                  marginTop: 0.9,
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    color: "#22262D",
                    fontSize: 15,
                    marginTop: 1,
                    fontWeight: "bold",
                  }}
                >
                  Enter Email
                </Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Enter Email"
              />

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 19,
                }}
              >
                <TouchableHighlight
                  onPress={pickImage}
                  style={styles.btnClickContain}
                  underlayColor="#22262D"
                >
                  <View style={styles.btnContainer}>
                    <Ionicons name={"cloud-upload"} size={30} color="#1D8ED9" />
                    <Text style={styles.btnText}>Choose Image</Text>
                  </View>
                </TouchableHighlight>

                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 90, height: 90, borderRadius: 50 }}
                  />
                )}
              </View>
            </SafeAreaView>

            <View
              style={{
                marginTop: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "#22262D",
                  padding: 20,
                  width: 340,
                  borderRadius: 60,
                }}
              >
                <Text style={{ color: "white" }}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Butto;

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
  },
  tinyLogo: {
    width: 380,
    height: 220,
    position: "absolute",
    borderWidth: 2,
    backgroundColor: "white",
    opacity: 0.5,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "blue",
  },
  input: {
    height: 40,
    // marginTop: 1,
    // margin: 3,
    width: 300,

    padding: 10,
    borderRadius: 12,
    backgroundColor: "lightgrey",
    shadowColor: "white",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 3,
    shadowRadius: 4,

    elevation: 1,
  },
  scrollView: {},

  btnClickContain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    backgroundColor: "#22262D",
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    borderRadius: 10,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 18,
    color: "#FAFAFA",
    marginLeft: 10,
    marginTop: 2,
  },
});
