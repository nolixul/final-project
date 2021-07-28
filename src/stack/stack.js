import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../components/signup_components/SignUp";
import VolunteerSUForm from "../components/signup_components/VolunteerSUForm";
const Stack = createStackNavigator();

export const VolunteerSUStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="VolunteerSUForm" component={VolunteerSUForm} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
