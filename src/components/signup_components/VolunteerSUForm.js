import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Input,
	Text,
	CheckBox,
	Button,
	Divider,
	Layout
} from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import CustomHeader from "../CustomHeader";
import { ScrollView } from "react-native-gesture-handler";

const VolunteerSUForm = React.memo(function VolunteerSUForm() {
	const [checkedCS, setCheckedCS] = useState(false);
	const [checkedMH, setCheckedMH] = useState(false);
	const [checkedEN, setCheckedEN] = useState(false);
	const [checkedAN, setCheckedAN] = useState(false);
	const [checkedDBS, setCheckedDBS] = useState(false);
	const [checkedDrive, setCheckedDrive] = useState(false);

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={true} />
				<Divider />
				<Layout style={styles.layout}>
					<View style={styles.titleContainer}>
						<Text status='control'>Volunteer Sign Up</Text>
					</View>
					<ScrollView>
						<View style={styles.view}>
							<View style={styles.interestsContainer}>
								<Text status='control'>Details</Text>
							</View>
							<Input
								style={styles.input}
								placeholder='First Name'
								leftIcon={{ type: "font-awesome", name: "user" }}
								/* onChangeText={(e) => handleEmail(e)} */
								/* value={login.email} */
							/>
							<Input
								style={styles.input}
								placeholder='Surname'
								leftIcon={{ type: "font-awesome", name: "envelope" }}
								/*  onChangeText={(e) => handleEmail(e)} */
								/* value={login.email} */
							/>

							<Input
								style={styles.input}
								placeholder='Email Address'
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
							<View style={styles.view}>
								<View style={styles.interestsContainer}>
									<Text status='control'>Interests</Text>
								</View>
								<CheckBox
									style={styles.checkBox}
									checked={checkedCS}
									onChange={(nextChecked) => setCheckedCS(nextChecked)}
								>
									{(evaProps) => <Text {...evaProps}>Community Support</Text>}
								</CheckBox>
								<CheckBox
									style={styles.checkBox}
									checked={checkedMH}
									onChange={(nextChecked) => setCheckedMH(nextChecked)}
								>
									{(evaProps) => <Text {...evaProps}>Mental Health</Text>}
								</CheckBox>
								<CheckBox
									style={styles.checkBox}
									checked={checkedEN}
									onChange={(nextChecked) => setCheckedEN(nextChecked)}
								>
									{(evaProps) => <Text {...evaProps}>Environment</Text>}
								</CheckBox>
								<CheckBox
									style={styles.checkBox}
									checked={checkedAN}
									onChange={(nextChecked) => setCheckedAN(nextChecked)}
								>
									{(evaProps) => <Text {...evaProps}>Animals</Text>}
								</CheckBox>
								<CheckBox
									checked={checkedDBS}
									onChange={(nextChecked) => setCheckedDBS(nextChecked)}
									style={styles.checkBox}
								>
									{(evaProps) => <Text {...evaProps}>DBS Check</Text>}
								</CheckBox>
								<CheckBox
									checked={checkedDrive}
									onChange={(nextChecked) => setCheckedDrive(nextChecked)}
									style={styles.checkBox}
								>
									{(evaProps) => <Text {...evaProps}>Driving license</Text>}
								</CheckBox>
							</View>

							<Button
								style={styles.button}

								/*   onPress={handleSubmit} */
							>
                Sign Up
							</Button>
						</View>
					</ScrollView>
				</Layout>
			</SafeAreaView>
		</>
	);
});

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
		marginBottom: 15,
		padding: 5,
		borderRadius: 50
	},
	checkBox: {
		width: 300,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#BAE9ED",
		marginTop: 10
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
		marginTop: 10
	}
});

export default VolunteerSUForm;
