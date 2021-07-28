import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { useState } from 'react';
import SignUp from './signup_components/SignUp';
import { UserContext } from '../context/User';

const Home = React.memo(function Home({ navigation }) {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const { User, setUser } = useContext(UserContext);

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
    setUser({ username: 'testUser', password: 'testPassword' });
    navigation.navigate('Homepage');
  };

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
      <SignUp navigation={navigation} />
    </>
  );
});

export default Home;
