import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Divider,
	Layout,
	Text,
	Input,
	Button,
	CheckBox
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { UserContext } from "../../context/User";

// Applications made
const VolMakeApplication = () => {
	const handleSubmit = () => {
		//  Submit application and it should show on volunteer's list and added to organisation list of volunteers for that opportunity
	};
	const { user } = useContext(UserContext);

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={false} />
				<Divider />
				<Layout style={{ justifyContent: "center", flex: 1 }}>
					<View style={{ alignItems: "center" }}>
						<View style={styles.nameContainer}>
							<Text status='control'>Your details</Text>
						</View>
						<Input
							style={styles.input}
							label='First Name'
							value={user.firstname}
							disabled={true}
						/>
						<Input
							style={styles.input}
							label='Surname'
							value={user.lastname}
							disabled={true}
						/>
						<Input
							style={styles.input}
							label='Email'
							value={user.email}
							disabled={true}
						/>
						<CheckBox
							checked={() => {
								if (user.dbs === 0) {
									return false;
								} else if (user.dbs === 1) {
									return true;
								}
							}}
							style={styles.checkBox}
						>
							{(evaProps) => <Text {...evaProps}>DBS Check</Text>}
						</CheckBox>
						<CheckBox
							checked={() => {
								if (user.drive === 0) {
									return false;
								} else if (user.drive === 1) {
									return true;
								}
							}}
							style={styles.checkBox}
						>
							{(evaProps) => <Text {...evaProps}>Driving license</Text>}
						</CheckBox>

						<Button style={styles.button} onPress={handleSubmit}>
              Submit application
						</Button>
					</View>
				</Layout>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	text: { marginTop: 10, padding: 5, borderRadius: 50 },
	button: { width: 250, marginTop: 10, padding: 5, borderRadius: 50 },
	saveButton: { marginTop: 10, padding: 5, borderRadius: 50 },
	input: { width: 250, marginTop: 10, padding: 5, borderRadius: 50 },
	nameContainer: {
		alignItems: "center",
		width: 250,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#5A8A97",
		marginTop: 10
	},
	checkBox: {
		width: 250,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#DBF5F6",
		marginTop: 10
	}
});

export default VolMakeApplication;
