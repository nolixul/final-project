import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Input,
	Text,
	CheckBox,
	Button,
	Divider,
	Layout,
} from "@ui-kitten/components";
import { View } from "react-native";
import CustomHeader from "../CustomHeader";

const VolunteerSUForm = React.memo(function VolunteerSUForm() {
	const [checkedCS, setCheckedCS] = useState(false);
	const [checkedMH, setCheckedMH] = useState(false);
	const [checkedEN, setCheckedEN] = useState(false);
	const [checkedAN, setCheckedAN] = useState(false);

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
							placeholder="Email Address"
							leftIcon={{ type: "font-awesome", name: "envelope" }}
							/*  onChangeText={(e) => handleEmail(e)} */
							/* value={login.email} */
						/>

						<Input
							placeholder="Password
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
					</View>
				</Layout>
			</SafeAreaView>
		</>
	);
});

export default VolunteerSUForm;
