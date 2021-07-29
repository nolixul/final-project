import React from "react";
import { View } from "react-native";
import { Input } from "@ui-kitten/components";

const OrganisationSUForm = () => {
	return (
		<View>
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
		</View>
	);
};

export default OrganisationSUForm;
