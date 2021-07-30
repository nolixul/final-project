import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import Homepage from "../components/Homepage";
import SignUpForm from "../components/signup_components/SignUpForm";

const { Navigator, Screen } = createStackNavigator();

export const LoginNavigator = () => (
	<Navigator headerMode='none'>
		<Screen name='Login' component={Login} />
		<Screen name='Homepage' component={Homepage} />
		<Screen name='SignUpForm' component={SignUpForm} />
	</Navigator>
);
