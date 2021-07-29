import React from "react";
import { Switch } from "react-native-elements";
import { SafeAreaView } from "react-native";
import VolunteerSUForm from "./VolunteerSUForm";
import {
	Divider,
	Icon,
	Layout,
	Button,
	TopNavigation,
	TopNavigationAction
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

// Sign up page

const SignUpForm = ({ navigation }) => {
	//   const [isVolunteer, setIsVolunteer] = useState(false);

	// LOOK AT HOW TO IMPLEMENT REACT NATIVE ELEMENTS SWITCH WITH ONVALUECHANGE
	// use this to set isVolunteer - this will determine the form shown
	// extract out forms and toggle which one is shown based on isVolunteer

	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<TopNavigation
					title='MyApp'
					alignment='center'
					accessoryLeft={BackAction}
				/>
				<Divider />
				<Layout
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<Switch value={false} color='orange' onValueChange />
					{/* CHOOSE AVATAR */}
					<VolunteerSUForm />

					<Button

						/*   onPress={handleSubmit} */
					>
            Sign Up
					</Button>
				</Layout>
			</SafeAreaView>
		</>
	);
};

export default SignUpForm;
