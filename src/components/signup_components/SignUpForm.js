import React from "react";
import { SafeAreaView } from "react-native";
import {
	Divider,
	Icon,
	Layout,
	Button,
	TopNavigation,
	TopNavigationAction
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

// Sign up page

const SignUpForm = ({ navigation }) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<TopNavigation
					title='MyApp'
					alignment='center'
					accessoryLeft={BackAction}
				/>
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
