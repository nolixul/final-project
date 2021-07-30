import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Divider,
	Icon,
	Layout,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// Homepage
const Homepage = ({ navigation }) => {
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
					title="MyApp"
					alignment="center"
					accessoryLeft={BackAction}
				/>
				<Divider />
				<Layout
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				></Layout>
			</SafeAreaView>
		</>
	);
};

export default Homepage;
