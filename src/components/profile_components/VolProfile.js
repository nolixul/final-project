import { Button, Input, Text, CheckBox } from "@ui-kitten/components";
import { Avatar } from "react-native-elements";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/User";
import { StyleSheet } from "react-native";
import { View } from "react-native";

// Volunteer profile screen. Rendered inside profile screen.
// MAKE SURE YOU DON'T SAVE AN EMPTY USERNAME

const VolProfile = () => {
	const [newUserName, setNewUsername] = useState("");
	const [newAvatarURL, setNewAvatarURL] = useState("");
	const { user, setUser } = useContext(UserContext);
	const [checkedDBS, setCheckedDBS] = useState(false);
	const [checkedDrive, setCheckedDrive] = useState(false);

	function fullName() {
		return user.firstname + " " + user.lastname;
	}

	function handleUsername(text) {
		setNewUsername(text);
	}

	function handleAvatar(text) {
		setNewAvatarURL(text);
	}

	// on pressing save changes, alter user data (patch request to backend) and set inputs to empty again

	function handleSubmit() {
		setUser((currUser) => {
			return { ...currUser, username: newUserName, avatarURL: newAvatarURL };
		});
		setNewUsername("");
		setNewAvatarURL("");
	}

	// User details - avatar, input to change avatar, username, input to change username, name, email address
	// change avatar url attribute to user.avatarURL when you get user

	return (
		<>
			<Avatar
				rounded
				size={150}
				containerStyle={{ borderColor: "#5A8A97", borderStyle: "solid" }}
				source={{
					uri: "https://image.flaticon.com/icons/png/512/847/847969.png"
				}}
			/>
			<Input
				style={styles.input}
				placeholder='New avatar URL'
				status='info'
				value={newAvatarURL}
				onChangeText={(text) => handleAvatar(text)}
			></Input>
			<Input
				style={styles.input}
				placeholder='Change username'
				status='info'
				value={newUserName}
				onChangeText={(text) => handleUsername(text)}
			></Input>
			<View style={styles.nameContainer}>
				<Text status='control'>{user.username}</Text>
			</View>

			<View style={styles.nameContainer}>
				<Text status='control'>{fullName()}</Text>
			</View>
			<View style={styles.nameContainer}>
				<Text status='control'>{user.email}</Text>
			</View>

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
			<Button style={styles.saveButton} onPress={handleSubmit}>
        Save Changes
			</Button>
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

export default VolProfile;
