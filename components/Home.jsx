import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { Alert } from "react-native";

const Home = () => {
  return (
    <>
      <Input
        placeholder="Enter your email address"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
      />

      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={{ type: "font-awesome", name: "key" }}
      />
      <Button title="Login" backgroundColor="red"></Button>
    </>
  );
};

export default Home;
