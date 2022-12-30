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
} from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [first, onChangeFirstName] = React.useState("");
  const [last, onChangeLast] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const submit = () => {
    //return Alert.alert(first,last);
    if (first === "asim" && last === "amir") {
      navigation.navigate("Button");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{ flex: 0.15, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View
          style={{ flex: 0.5, alignItems: "center", justifycontent: "center" }}
        >
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeFirstName}
              value={first}
              placeholder="Enter First Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeLast}
              value={last}
              placeholder="Enter Last Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter Mobile Number"
              keyboardType="numeric"
              secureTextEntry={true}
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Enter Password"
            />
          </SafeAreaView>
        </View>
        <View
          style={{ flex: 0.2, alignItems: "center", justifycontent: "center" }}
        >
          <Text>Sign up with your Social Account</Text>
        </View>

        <View
          style={{ flex: 0.3, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity style={styles.button} onPress={() => submit()}>
            <Text>Press Here</Text>
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20, color: "blue", marginBottom: 89 }}>
              Read user licence Agreement
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "blue",
  },
  input: {
    height: 40,
    marginTop: 30,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 29,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    margin: 12,
    padding: 22,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1D8ED9",
    padding: 20,
    borderRadius: 29,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 10,
  },
});
export default Login;
