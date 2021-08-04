import React from "react";
import {
	TopNavigation,
	TopNavigationAction,
	Icon
} from "@ui-kitten/components";
import * as RootNavigation from "../RootNavigation";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;
const MenuIcon = (props) => <Icon {...props} name='menu-outline' />;

// Custom header - renders a menu icon if !isSignUp, else renders a back icon in top left

const CustomHeader = ({ isSignUp }) => {
	const navigateBack = () => {
		RootNavigation.goBack();
	};

	const navigateMenu = () => {
		RootNavigation.openDrawer();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);

	const MenuAction = () => {
		return <TopNavigationAction icon={MenuIcon} onPress={navigateMenu} />;
	};

	if (!isSignUp) {
		return (
			<TopNavigation
				title='ChariT'
				alignment='center'
				accessoryLeft={MenuAction}
			/>
		);
	} else {
		return (
			<TopNavigation
				title='ChariT'
				alignment='center'
				accessoryLeft={BackAction}
			/>
		);
	}
};

export default CustomHeader;
