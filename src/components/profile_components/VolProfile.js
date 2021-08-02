import { Button, Input, Text } from "@ui-kitten/components";
import { Avatar } from "react-native-elements";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { UserContext } from "../../context/User";
import { View } from "react-native";

// Volunteer profile screen. Rendered inside profile screen.

const VolProfile = () => {
	const [newUserName, setNewUsername] = useState("");
	const [newAvatarURL, setNewAvatarURL] = useState("");
	const { User, setUser } = useContext(UserContext);

	function handleUsername(text) {
		setNewUsername(text);
	}

	function handleAvatar(text) {
		setNewAvatarURL(text);
	}

	function handleSubmit() {
		setUser((currUser) => ({
			...currUser,
			username: newUserName,
			avatarURL: newAvatarURL
		}));
	}

	return (
		<>
			<Avatar
				rounded
				size={200}
				containerStyle={{ borderColor: "#5A8A97", borderStyle: "solid" }}
				source={{
					uri: "https://image.flaticon.com/icons/png/512/847/847969.png"
				}}
			/>
			<Input
				style={styles.input}
				placeholder='Avatar URL'
				status='info'
				onChangeText={(text) => handleAvatar(text)}
			></Input>
			<View style={styles.nameContainer}>
				<Text status='control'>{User.lastName}</Text>
			</View>
			<View style={styles.nameContainer}>
				<Text status='control'>{User.username}</Text>
			</View>

			<Input
				style={styles.input}
				placeholder='Change your username'
				status='info'
				onChangeText={(text) => handleUsername(text)}
			></Input>
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

export default VolProfile;
