import React from "react";
import { SafeAreaView } from "react-native";
import {
	Input,
	Button,
	TopNavigation,
	Divider,
	Icon,
	TopNavigationAction
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

const OrganisationSUForm = ({ navigation }) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	return (
		<SafeAreaView>
			<TopNavigation
				title='MyApp'
				alignment='center'
				accessoryLeft={BackAction}
			/>
			<Divider />

			<Input
				placeholder='Organisation Name'
				leftIcon={{ type: "font-awesome", name: "user" }}
				/* onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>

			<Input
				placeholder='Enter your email address'
				leftIcon={{ type: "font-awesome", name: "envelope" }}
				/*  onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>

			<Input
				placeholder='Password'
				secureTextEntry={true}
				leftIcon={{ type: "font-awesome", name: "key" }}
				/* onChangeText={(e) => handlePassword(e)} */
				/* value={login.password} */
			/>
			<Button

				/*   onPress={handleSubmit} */
			>
        Sign Up
			</Button>
		</SafeAreaView>
	);
};

export default OrganisationSUForm;
