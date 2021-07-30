import React from "react";
import { Drawer, DrawerGroup, DrawerItem, Icon } from "@ui-kitten/components";
const OppsIcon = (props) => <Icon {...props} name="star-outline" />;
const CommunityIcon = (props) => <Icon {...props} name="people-outline" />;
const MentalHealthIcon = (props) => (
	<Icon {...props} name="headphones-outline" />
);
const EnvironmentIcon = (props) => <Icon {...props} name="globe-2-outline" />;
const AnimalIcon = (props) => <Icon {...props} name="heart-outline" />;
const ApplicationsIcon = (props) => (
	<Icon {...props} name="file-text-outline" />
);
const ProfileIcon = (props) => <Icon {...props} name="settings-2-outline" />;

export const DrawerNavigation = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(null);
	return (
		<Drawer
			selectedIndex={selectedIndex}
			onSelect={(index) => setSelectedIndex(index)}
		>
			<DrawerGroup title="Opportunities" accessoryLeft={OppsIcon}>
				<DrawerItem title="Community Support" accessoryLeft={CommunityIcon} />
				<DrawerItem title="Mental Health" accessoryLeft={MentalHealthIcon} />
				<DrawerItem title="Environment" accessoryLeft={EnvironmentIcon} />
				<DrawerItem title="Animals" accessoryLeft={AnimalIcon} />
			</DrawerGroup>
			<DrawerItem title="Applications" accessoryLeft={ApplicationsIcon} />
			<DrawerItem title="Profile" accessoryLeft={ProfileIcon} />
		</Drawer>
	);
};
