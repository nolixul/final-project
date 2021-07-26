import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Home from "./components/Home";
import { UserContext } from "./context/User";

export default function App() {
	const [User, setUser] = useState("");

	return (
		<View style={styles.container}>
			<UserContext.Provider value={User}>
				<Home setUser={setUser} />
			</UserContext.Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
