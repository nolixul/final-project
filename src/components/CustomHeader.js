import React from "react";
import {
	TopNavigation,
	TopNavigationAction,
	Icon
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

const CustomHeader = ({ navigation, isSignUp }) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	if (!isSignUp) {
		return <></>;
	} else {
		return (
			<TopNavigation
				title='MyApp'
				alignment='center'
				accessoryLeft={BackAction}
			/>
		);
	}
};

export default CustomHeader;
