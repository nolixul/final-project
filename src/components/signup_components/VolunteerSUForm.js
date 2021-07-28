import React, { useState } from "react";
import { Input, Button, CheckBox } from "react-native-elements";
import { ScreenContainer } from "react-native-screens";
import SignUp from "./SignUp";

// Volunteer sign up form page
// Issue with state being undefined - can navigate to this page no problem with text test

const VolunteerSUForm = () => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<ScreenContainer>
				{/* CHOOSE AVATAR */}
				{/* SET INTERESTS - checkboxes */}

				<CheckBox
					center
					title='Community support'
					checkedIcon='dot-circle-o'
					uncheckedIcon='circle-o'
					onPress={() => {
						setChecked(!checked);
					}}
					checked={checked}
				/>
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
					title='Sign Up'
					backgroundColor='red'
					/*   onPress={handleSubmit} */
				></Button>
				<SignUp />
			</ScreenContainer>
		</>
	);
};

export default VolunteerSUForm;
