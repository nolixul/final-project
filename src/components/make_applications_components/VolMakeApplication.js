import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout, Text, Input, Button } from "@ui-kitten/components";
import { DrawerNavigation } from "../../navigation/drawernavigation";
import { StyleSheet } from "react-native";
import CustomHeader from "../CustomHeader";

// Applications made
const VolMakeApplication = () => {
	const [firstName, setfirstName] = React.useState("");
	const [surname, setSurname] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [requests, setRequests] = React.useState("");

	const handleSubmit = () => {
		//  Submit application and it should show on volunteer's list and added to organisation list of volunteers for that opportunity
	};

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={false} />
				<Divider />
				<Layout style={{ flex: 1 }}>
					<DrawerNavigation />
				</Layout>

				<Layout style={(styles.container, { flex: 1 })}>
					<Text>Fill in application form</Text>
					<Input
						label='First Name'
						placeholder=''
						value={firstName}
						onChangeText={(nextValue) => setfirstName(nextValue)}
					/>
					<Input
						label='Surname'
						placeholder=''
						value={surname}
						onChangeText={(nextValue) => setSurname(nextValue)}
					/>
					<Input
						label='E-mail'
						placeholder=''
						value={email}
						onChangeText={(nextValue) => setEmail(nextValue)}
					/>
					<Input
						label='Phone number'
						placeholder=''
						value={phoneNumber}
						onChangeText={(nextValue) => setPhoneNumber(nextValue)}
					/>
					<Input
						label='Special requirements'
						placeholder=''
						value={requests}
						onChangeText={(nextValue) => setRequests(nextValue)}
					/>
					<Button style={styles.button} onPress={handleSubmit}>
            Submit application
					</Button>
				</Layout>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 128,
		justifyContent: "center"
	},
	button: {
		width: 200,
		marginTop: 10,
		padding: 5,
		borderRadius: 50
	}
});

export default VolMakeApplication;
