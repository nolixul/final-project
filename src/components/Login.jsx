import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../context/User';
import { StyleSheet, View, Image } from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Input,
  Avatar
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { getUser } from '../utils/api';

// login page for volunteer/organisation - sign up pop up as well

const Login = React.memo(function Home({ navigation }) {
  // set login details in state, extract User and setUser from context
  const { user, setUser } = useContext(UserContext);
  const [submitPressed, setSubmitPressed] = useState(false);

  // Hardcoding the user to be mercedes for demo purposes
  useEffect(() => {
    setUser({
      username: 'Mercedes',
      avatar_url:
        'https://gravatar.com/avatar/bc6705809d3d8d7dadcd5fb859a853ce?s=400&d=robohash&r=x',
      firstname: 'Mer',
      lastname: 'Lau',
      dbs: 0,
      drive: 1,
      email: 'mercedes@gmail.com',
      password: 'password'
    });
  }, []);

  const [login, setLogin] = useState({
    userName: '',
    password: ''
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

  // function to handle what happens then the login button is pressed - not working, async setting user for some reason. Is only fetching from the users table in the database

  // function handleSubmit() {
  //   setSubmitPressed(true);
  // }

  // useEffect(() => {
  //   getUser(login)
  //     .then((userFromApi) => {
  //       console.log(userFromApi, 'userFromApi');
  //       setUser(userFromApi);
  //       console.log(user, 'user after setuser');
  //       if (user.hasOwnProperty('email')) {
  //         navigation.navigate('Homepage');
  //       }
  //     })
  //     .catch((err) => console.log(err, 'ERROR'));
  // }, [submitPressed]);

  // TEMPORARY HANDLE PRESSING LOGIN
  function handlePress() {
    navigation.navigate('Homepage');
  }

  // username address and password inputs, login button and SignUp button

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title='MyApp' alignment='center' />
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ flexDirection: 'row', height: 75 }}></View>
          <Image
            source={require('../images/chariT-logos.jpeg')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Input
              style={styles.input}
              placeholder='Username'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(e) => handleUsername(e)}
              value={login.username}
            />

            <Input
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              leftIcon={{ type: 'font-awesome', name: 'key' }}
              onChangeText={(e) => handlePassword(e)}
              value={login.password}
            />
            <Button style={styles.button} onPress={handlePress}>
              Login
            </Button>
            <Button
              style={styles.button}
              onPress={() => {
                navigation.navigate('SignUpForm');
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
    borderRadius: 50
  },
  input: { width: 300, marginTop: 4, padding: 5, borderRadius: 50 },
  container: {
    minHeight: 128
  }
});

export default Login;
