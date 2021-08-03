import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Layout, Divider, Button } from "@ui-kitten/components";
import { View } from "react-native";
import CustomHeader from "../CustomHeader";

const OrganisationSUForm = () => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={true} />
				<Divider />
				<Layout
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<View style={{ flex: 1, justifyContent: "center" }}>
						<Input
							placeholder="Organisation Name"
							leftIcon={{ type: "font-awesome", name: "user" }}
							/* onChangeText={(e) => handleEmail(e)} */
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
						<Button

							/*   onPress={handleSubmit} */
						>
              Sign Up
						</Button>
					</View>
				</Layout>
			</SafeAreaView>
		</>
	);
};

export default OrganisationSUForm;
