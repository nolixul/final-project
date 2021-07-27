import React from 'react';
import { Input, Button } from 'react-native-elements';
import { useState } from 'react';
import SignUp from './SignUp';

const Home = ({ setUser }) => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
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

  const handleSubmit = () => {
    /* Retrieve user Profile */
    /* if user exists takes to the next page, 
    else, throw error empty input */
  };

  console.log(login);

  return (
    <>
      <Input
        placeholder='Enter your email address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={(e) => handleEmail(e)}
        value={login.email}
      />

      <Input
        placeholder='Password'
        secureTextEntry={true}
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        onChangeText={(e) => handlePassword(e)}
        value={login.password}
      />
      <Button
        title='Login'
        backgroundColor='red'
        onPress={handleSubmit}
      ></Button>
      <SignUp />
    </>
  );
};

export default Home;
