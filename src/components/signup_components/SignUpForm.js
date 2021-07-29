import React from "react";
import { Button, Switch } from "react-native-elements";
import { View } from "react-native";
import VolunteerSUForm from "./VolunteerSUForm";

// Sign up page

const SignUpForm = () => {
	//   const [isVolunteer, setIsVolunteer] = useState(false);

	// LOOK AT HOW TO IMPLEMENT REACT NATIVE ELEMENTS SWITCH WITH ONVALUECHANGE
	// use this to set isVolunteer - this will determine the form shown
	// extract out forms and toggle which one is shown based on isVolunteer

	return (
		<>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Switch value={false} color='orange' onValueChange />
				{/* CHOOSE AVATAR */}
				<VolunteerSUForm />
				<Button
					title='Sign Up'
					backgroundColor='red'
					/*   onPress={handleSubmit} */
				></Button>
			</View>
		</>
	);
};

export default SignUpForm;
