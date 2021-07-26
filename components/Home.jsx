import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { useState } from "react";

const Home = ({ setUser }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handlePassword = (e) => {
    const newLogin = { ...login };
    newLogin.password = e;
    setLogin(newLogin);
  };

  const handleEmail = (e) => {
    const newLogin = { ...login };
    newLogin.email = e;
    setLogin(newLogin);
  };

  console.log(login);

  return (
    <>
      <Input
        placeholder="Enter your email address"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(e) => handleEmail(e)}
        value={login.email}
      />

      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={{ type: "font-awesome", name: "key" }}
        onChangeText={(e) => handlePassword(e)}
        value={login.password}
      />
      <Button title="Login" backgroundColor="red"></Button>
    </>
  );
};

export default Home;
