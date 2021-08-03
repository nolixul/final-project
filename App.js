import React, { useState } from "react";
import { UserContext } from "./src/context/User";
import { IsVolunteerContext } from "./src/context/IsVolunteer";
import { NavigationContainer } from "@react-navigation/native";
import { default as theme } from "./src/theme/custom-theme (4).json";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { LoginNavigator } from "./src/navigation/stackNavRoutes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef, isReadyRef } from "./src/RootNavigation";

export default function App() {
	const [user, setUser] = useState({});
	const [isVolunteer, setIsVolunteer] = useState(true);
	// Can't pass props in between stack.screen tags, must declare screens in one self closing tag for react navigation to work. Use context.

	// Declare navigation stacks elsewhere - see ui kitten for details. Get rid of auto header

	React.useEffect(() => {
		return () => {
			isReadyRef.current = false;
		};
	}, []);

	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
				<SafeAreaProvider>
					<NavigationContainer
						headerMode='none'
						ref={navigationRef}
						onReady={() => {
							isReadyRef.current = true;
						}}
					>
						<IsVolunteerContext.Provider
							value={{ isVolunteer, setIsVolunteer }}
						>
							<UserContext.Provider value={{ user, setUser }}>
								<LoginNavigator />
							</UserContext.Provider>
						</IsVolunteerContext.Provider>
					</NavigationContainer>
				</SafeAreaProvider>
			</ApplicationProvider>
		</>
	);
}
