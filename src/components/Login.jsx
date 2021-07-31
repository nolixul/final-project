import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/User";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Input,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

// login page for volunteer/organisation - sign up pop up as well

const Login = React.memo(function Home({ navigation }) {
  // set login details in state, extract User and setUser from context

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { User, setUser } = useContext(UserContext);

  // function to alter password in login state

  const handlePassword = (e) => {
    const newLogin = { ...login };
    newLogin.password = e;
    setLogin(newLogin);
  };

  // function to alter username in login state

  const handleEmail = (e) => {
    const newLogin = { ...login };
    newLogin.email = e;
    setLogin(newLogin);
  };

  // function to handle what happens then the login button is pressed

  const handleSubmit = () => {
    /* Retrieve user Profile */
    /* if user exists takes to the next page, 
    else, throw error empty input */
    setUser({ username: "testUser", password: "testPassword" });
    // navigation.navigate("Homepage");
    navigation.navigate("VolHomepage");
  };

  // email address and password inputs, login button and SignUp button

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title="MyApp" alignment="center" />
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
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
            <Button style={styles.button} onPress={handleSubmit}>
              Login
            </Button>
            <Button
              style={styles.button}
              onPress={() => {
                navigation.navigate("SignUpForm");
              }}
            >
              Sign Up
            </Button>
          </View>
        </Layout>
      </SafeAreaView>
    </>
  );
});

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Login;
