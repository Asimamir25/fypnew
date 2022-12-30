import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const About = ({ navigation }) => {
  const [estado, setEstado] = useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  console.log(estado);

  return (
    <View>
      <TouchableOpacity onPress={() => agregarFavoritos()}>
        <Ionicons
          name={estado ? "md-heart" : "md-heart-empty"}
          size={20}
          color="#ff6347"
        />
      </TouchableOpacity>
    </View>
  );
};

export default About;
