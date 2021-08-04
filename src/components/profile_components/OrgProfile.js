import { Button, Input, Text } from "@ui-kitten/components";
import { Avatar } from "react-native-elements";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { UserContext } from "../../context/User";
import { View } from "react-native";

const OrgProfile = () => {
	const [newOrgName, setNewOrgName] = useState("");
	const [newAvatarURL, setNewAvatarURL] = useState("");
	const { user, setUser } = useContext(UserContext);

	function handleOrgName(text) {
		setNewOrgName(text);
	}

	function handleAvatar(text) {
		setNewAvatarURL(text);
	}

	// on pressing save changes, alter user data (patch request to backend) and set inputs to empty again

	function handleSubmit() {
		setUser((currUser) => {
			return { ...currUser, OrgName: newOrgName, avatarURL: newAvatarURL };
		});
		setNewOrgName("");
		setNewAvatarURL("");
	}

	// User details - avatar, input to change avatar, OrgName, input to change OrgName, name, email address
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
				placeholder='Change your OrgName'
				status='info'
				value={newOrgName}
				onChangeText={(text) => handleOrgName(text)}
			></Input>
			<View style={styles.nameContainer}>
				<Text status='control'>{user.OrgName}</Text>
			</View>

			<View style={styles.nameContainer}>
				<Text status='control'>{user.email}</Text>
			</View>

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
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#5A8A97",
		marginTop: 10
	}
});

export default OrgProfile;
