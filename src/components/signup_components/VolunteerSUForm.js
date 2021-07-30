import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
	Input,
	Text,
	CheckBox,
	Button,
	TopNavigation,
	Divider,
	TopNavigationAction,
	Icon
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

const VolunteerSUForm = ({ navigation }) => {
	const [checkedCS, setCheckedCS] = useState(false);
	const [checkedMH, setCheckedMH] = useState(false);
	const [checkedEN, setCheckedEN] = useState(false);
	const [checkedAN, setCheckedAN] = useState(false);

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
				placeholder='First Name'
				leftIcon={{ type: "font-awesome", name: "user" }}
				/* onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>
			<Input
				placeholder='Surname'
				leftIcon={{ type: "font-awesome", name: "envelope" }}
				/*  onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>

			<Input
				placeholder='Email Address'
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

			<Text>Interests</Text>
			<CheckBox
				checked={checkedCS}
				onChange={(nextChecked) => setCheckedCS(nextChecked)}
			>
				{(evaProps) => <Text {...evaProps}>Community Support</Text>}
			</CheckBox>
			<CheckBox
				checked={checkedMH}
				onChange={(nextChecked) => setCheckedMH(nextChecked)}
			>
				{(evaProps) => <Text {...evaProps}>Mental Health</Text>}
			</CheckBox>
			<CheckBox
				checked={checkedEN}
				onChange={(nextChecked) => setCheckedEN(nextChecked)}
			>
				{(evaProps) => <Text {...evaProps}>Environment</Text>}
			</CheckBox>
			<CheckBox
				checked={checkedAN}
				onChange={(nextChecked) => setCheckedAN(nextChecked)}
			>
				{(evaProps) => <Text {...evaProps}>Animals</Text>}
			</CheckBox>
			<Button

				/*   onPress={handleSubmit} */
			>
        Sign Up
			</Button>
		</SafeAreaView>
	);
};

export default VolunteerSUForm;
