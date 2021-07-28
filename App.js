import React, { useState } from "react";
import Login from "./src/components/Login";
import { UserContext } from "./src/context/User";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VolunteerSUForm from "./src/components/signup_components/VolunteerSUForm";
import Homepage from "./src/components/Homepage";
const Stack = createStackNavigator();

export default function App() {
	const [User, setUser] = useState("");
	// Can't pass props in this way below, must declare screens in one self closing tag for react navigation to work.
	{
		/* {() => <Login setUser={setUser} />} */
	}
	{
		/* </Stack.Screen> */
	}
	return (
		<NavigationContainer>
			<UserContext.Provider value={{ User, setUser }}>
				<Stack.Navigator>
					<Stack.Screen name='Login' component={Login} />
					<Stack.Screen name='VolunteerSUForm' component={VolunteerSUForm} />
					<Stack.Screen name='Homepage' component={Homepage} />
				</Stack.Navigator>
			</UserContext.Provider>
		</NavigationContainer>
	);
}
