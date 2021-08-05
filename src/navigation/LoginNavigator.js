import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import SignUpForm from "../components/signup_components/SignUpForm";
import OrganisationSUForm from "../components/signup_components/OrganisationSUForm";
import VolunteerSUForm from "../components/signup_components/VolunteerSUForm";
import DrawerNavigator from "./drawernavigation";

// Declaring stack navigation independently of app component

const { Navigator, Screen } = createStackNavigator();

export const LoginNavigator = () => (
	<Navigator headerMode='none' initialRouteName='Login'>
		<Screen name='Login' component={Login} />
		<Screen name='Homepage' component={DrawerNavigator} />
		<Screen name='SignUpForm' component={SignUpForm} />
		<Screen name='VolunteerSUForm' component={VolunteerSUForm} />
		<Screen name='OrganisationSUForm' component={OrganisationSUForm} />
	</Navigator>
);
