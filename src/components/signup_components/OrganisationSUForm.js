import React from "react";
import { SafeAreaView } from "react-native";
import { Input, Button, Layout } from "@ui-kitten/components";

const OrganisationSUForm = () => {
	return (
		<SafeAreaView>
			<Layout
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
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
			</Layout>
		</SafeAreaView>
	);
};

export default OrganisationSUForm;
