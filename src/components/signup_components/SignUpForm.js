import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import CustomHeader from "../CustomHeader";

// Sign up page

const SignUpForm = ({ navigation }) => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={true} />
				<Divider />
				<Layout
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<Button
						style={styles.button}
						onPress={() => {
							navigation.navigate("VolunteerSUForm");
						}}
					>
            Volunteer
					</Button>
					<Button
						style={styles.button}
						onPress={() => {
							navigation.navigate("OrganisationSUForm");
						}}
					>
            Organisation
					</Button>
				</Layout>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 200,
		marginTop: 10,
		padding: 5,
		borderRadius: 50
	}
});

export default SignUpForm;
