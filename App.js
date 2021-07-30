import React, { useState } from "react";
import Login from "./src/components/Login";
import { UserContext } from "./src/context/User";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./src/components/Homepage";
import SignUpForm from "./src/components/signup_components/SignUpForm";
import { default as theme } from "./src/theme/custom-theme (4).json";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const Stack = createStackNavigator();

export default function App() {
	const [User, setUser] = useState("");
	// Can't pass props in between stack.screen tags, must declare screens in one self closing tag for react navigation to work. Use context.

	// Declare navigation stacks elsewhere - see ui kitten for details. Get rid of auto header

	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
				<NavigationContainer headerMode='none'>
					<UserContext.Provider value={{ User, setUser }}>
						<Stack.Navigator>
							<Stack.Screen name='Login' component={Login} />

							<Stack.Screen name='Homepage' component={Homepage} />
							<Stack.Screen
								name='SignUpForm'
								component={SignUpForm}
								options={() => ({
									title: "Sign Up"
								})}
							/>
						</Stack.Navigator>
					</UserContext.Provider>
				</NavigationContainer>
			</ApplicationProvider>
		</>
	);
}
