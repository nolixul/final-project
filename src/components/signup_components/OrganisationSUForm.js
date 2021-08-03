import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Layout, Divider, Button, Text } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import CustomHeader from "../CustomHeader";

const OrganisationSUForm = () => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={true} />
				<Divider />
				<Layout style={styles.layout}>
					<View style={styles.titleContainer}>
						<Text status='control'>Organisation Sign Up</Text>
					</View>
					<View style={styles.view}>
						<Input
							style={styles.input}
							placeholder='Organisation Name'
							leftIcon={{ type: "font-awesome", name: "user" }}
							/* onChangeText={(e) => handleEmail(e)} */
							/* value={login.email} */
						/>
						<Input
							style={styles.input}
							placeholder='Enter your email address'
							leftIcon={{ type: "font-awesome", name: "envelope" }}
							/*  onChangeText={(e) => handleEmail(e)} */
							/* value={login.email} */
						/>

						<Input
							style={styles.input}
							placeholder='Password'
							secureTextEntry={true}
							leftIcon={{ type: "font-awesome", name: "key" }}
							/* onChangeText={(e) => handlePassword(e)} */
							/* value={login.password} */
						/>
						<Button
							style={styles.button}

							/*   onPress={handleSubmit} */
						>
              Sign Up
						</Button>
					</View>
				</Layout>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	input: { width: 300, marginTop: 4, padding: 5, borderRadius: 50 },
	container: {
		minHeight: 128
	},
	view: { justifyContent: "center", alignItems: "center" },
	layout: { flex: 1, justifyContent: "center", alignItems: "center" },
	button: {
		width: 200,
		marginTop: 15,
		padding: 5,
		borderRadius: 50
	},
	interestsContainer: {
		alignItems: "center",
		width: 200,
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#5A8A97",
		marginTop: 10
	},
	titleContainer: {
		alignItems: "center",
		width: 250,
		padding: 15,
		borderRadius: 50,
		backgroundColor: "#264653",
		marginBottom: 10
	}
});

export default OrganisationSUForm;
