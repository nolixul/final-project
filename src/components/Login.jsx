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
import { useEffect } from "react";

// login page for volunteer/organisation - sign up pop up as well

const Login = React.memo(function Home({ navigation }) {
  // set login details in state, extract User and setUser from context
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser({
      username: "testUser",
      firstname: "Iqpal",
      lastname: "Mannan",
      email: "dummyEmail",
      password: "testPassword",
    });
  }, []);

  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });

  // function to alter password in login state

  const handlePassword = (e) => {
    const newLogin = { ...login };
    newLogin.password = e;
    setLogin(newLogin);
  };

  // function to alter username in login state

  const handleUsername = (e) => {
    const newLogin = { ...login };
    newLogin.username = e;
    setLogin(newLogin);
  };

  // function to handle what happens then the login button is pressed

  const handleSubmit = () => {
    /* Retrieve isVolunteer, setIsVolunteer, retrieve user Profile */
    /* if user exists takes to the next page, 
    else, throw error empty input */

    if (user.hasOwnProperty("email")) {
      navigation.navigate("Homepage");
    }
  };

  // username address and password inputs, login button and SignUp button

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
              style={styles.input}
              placeholder="Username"
              leftIcon={{ type: "font-awesome", name: "envelope" }}
              onChangeText={(e) => handleUsername(e)}
              value={login.username}
            />

            <Input
              style={styles.input}
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
  input: { width: 300, marginTop: 4, padding: 5, borderRadius: 50 },
  container: {
    minHeight: 128,
  },
});

export default Login;
