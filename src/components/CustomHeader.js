import React from "react";
import {
	TopNavigation,
	TopNavigationAction,
	Icon
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

const CustomHeader = ({ navigation }) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	return (
		<TopNavigation
			title='MyApp'
			alignment='center'
			accessoryLeft={BackAction}
		/>
	);
};

export default CustomHeader;
