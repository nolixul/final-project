import React from "react";
import {
	TopNavigation,
	TopNavigationAction,
	Icon,
} from "@ui-kitten/components";
import * as RootNavigation from "../RootNavigation";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const MenuIcon = (props) => <Icon {...props} name="menu-outline" />;

// THIS IS WHERE THE ERROR IS DON'T FORGET IT, MENU ACTION JUST PUT A RETURN IN RANDOM PLACES

const CustomHeader = ({ isSignUp }) => {
	const navigateBack = () => {
		RootNavigation.goBack();
		//navigation.goBack();
	};

	const navigateMenu = () => {
		RootNavigation.openDrawer();
		//navigation.openDrawer();

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

				title="MyApp"
				alignment="center"
				accessoryLeft={MenuAction}
			/>
		);
	} else {
		return (
			<TopNavigation
				title="MyApp"
				alignment="center"
				accessoryLeft={BackAction}
			/>
		);
	}
};

export default CustomHeader;
