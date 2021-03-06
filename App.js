import React, { useState } from "react";
import { UserContext } from "./src/context/User";
import { IsVolunteerContext } from "./src/context/IsVolunteer";
import { CategoryContext } from "./src/context/CategoryContext";
import { PageContext } from "./src/context/PageContext";
import { OpportunityIDContext } from "./src/context/OpportunityIDContext";
import { NavigationContainer } from "@react-navigation/native";
import { default as theme } from "./src/theme/custom-theme (4).json";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { LoginNavigator } from "./src/navigation/LoginNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef, isReadyRef } from "./src/RootNavigation";

export default function App() {
	const [user, setUser] = useState({});
	const [isVolunteer, setIsVolunteer] = useState(true);
	const [category, setCategory] = useState("");
	const [page, setPage] = useState("Opportunities");
	const [oppID, setOppID] = useState();

	// Can't pass props in between stack.screen tags, must declare screens in one self closing tag for react navigation to work. Use context.

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
						<OpportunityIDContext.Provider value={{ oppID, setOppID }}>
							<PageContext.Provider value={{ page, setPage }}>
								<CategoryContext.Provider value={{ category, setCategory }}>
									<IsVolunteerContext.Provider
										value={{ isVolunteer, setIsVolunteer }}
									>
										<UserContext.Provider value={{ user, setUser }}>
											<LoginNavigator />
										</UserContext.Provider>
									</IsVolunteerContext.Provider>
								</CategoryContext.Provider>
							</PageContext.Provider>
						</OpportunityIDContext.Provider>
					</NavigationContainer>
				</SafeAreaProvider>
			</ApplicationProvider>
		</>
	);
}
