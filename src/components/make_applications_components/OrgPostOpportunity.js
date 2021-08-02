import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Divider,
	Icon,
	Layout,
	TopNavigation,
	TopNavigationAction,
	Text,
	Input,
	Button,
} from "@ui-kitten/components";
import { DrawerNavigation } from "../../navigation/drawernavigation";
import { StyleSheet } from "react-native";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// Applications made
const OrgMakeApplication = ({ navigation }) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	const [eventName, setEventName] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [requests, setRequests] = React.useState("");

	const handleSubmit = () => {
		//  Submit opportunity and it should show on volunteer's potential list and added to organisation list of opportunities
	};

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<TopNavigation
					title="Organisation Post Opportunity"
					alignment="center"
					accessoryLeft={BackAction}
				/>
				<Divider />
				<Layout style={{ flex: 1 }}>
					<DrawerNavigation />
				</Layout>

				<Layout style={(styles.container, { flex: 1 })}>
					<Text>Fill in opportunity details</Text>
					<Input
						label="Event Name"
						placeholder=""
						value={eventName}
						onChangeText={(nextValue) => setEventName(nextValue)}
					/>
					<Input
						label="Location"
						placeholder=""
						value={location}
						onChangeText={(nextValue) => setLocation(nextValue)}
					/>
					<Input
						label="E-mail"
						placeholder=""
						value={email}
						onChangeText={(nextValue) => setEmail(nextValue)}
					/>
					<Input
						label="Phone number"
						placeholder=""
						value={phoneNumber}
						onChangeText={(nextValue) => setPhoneNumber(nextValue)}
					/>
					<Input
						label="Special requirements"
						placeholder="DBS Check etc..."
						value={requests}
						onChangeText={(nextValue) => setRequests(nextValue)}
					/>
					<Button style={styles.button} onPress={handleSubmit}>
            Post opportunity
					</Button>
				</Layout>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 128,
		justifyContent: "center",
	},
	button: {
		width: 200,
		marginTop: 10,
		padding: 5,
		borderRadius: 50,
	},
});

export default OrgMakeApplication;
