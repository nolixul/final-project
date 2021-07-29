import React, { useState } from "react";
import { Input, Button, CheckBox } from "react-native-elements";
import { Text } from "react-native";

// Volunteer sign up form page

const SignUpForm = () => {
	const [checkedCS, setCheckedCS] = useState(false);
	const [checkedMH, setCheckedMH] = useState(false);
	const [checkedEN, setCheckedEN] = useState(false);
	const [checkedAN, setCheckedAN] = useState(false);

	return (
		<>
			{/* CHOOSE AVATAR */}

			<Input
				placeholder="First Name"
				leftIcon={{ type: "font-awesome", name: "user" }}
				/* onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>
			<Input
				placeholder="Surname"
				leftIcon={{ type: "font-awesome", name: "envelope" }}
				/*  onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>

			<Input
				placeholder="Enter your email address"
				leftIcon={{ type: "font-awesome", name: "envelope" }}
				/*  onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>

			<Input
				placeholder="Password"
				secureTextEntry={true}
				leftIcon={{ type: "font-awesome", name: "key" }}
				/* onChangeText={(e) => handlePassword(e)} */
				/* value={login.password} */
			/>

			<Text>Interests</Text>
			<CheckBox
				title="Community support"
				checkedIcon="dot-circle-o"
				uncheckedIcon="circle-o"
				onPress={() => {
					setCheckedCS(!checkedCS);
				}}
				checked={checkedCS}
			/>
			<CheckBox
				title="Mental Health"
				checkedIcon="dot-circle-o"
				uncheckedIcon="circle-o"
				onPress={() => {
					setCheckedMH(!checkedMH);
				}}
				checked={checkedMH}
			/>
			<CheckBox
				title="Environment"
				checkedIcon="dot-circle-o"
				uncheckedIcon="circle-o"
				onPress={() => {
					setCheckedEN(!checkedEN);
				}}
				checked={checkedEN}
			/>
			<CheckBox
				title="Animals"
				checkedIcon="dot-circle-o"
				uncheckedIcon="circle-o"
				onPress={() => {
					setCheckedAN(!checkedAN);
				}}
				checked={checkedAN}
			/>
			<Button
				title="Sign Up"
				backgroundColor="red"
				/*   onPress={handleSubmit} */
			></Button>
		</>
	);
};

export default SignUpForm;
