import React, { useContext } from "react";
import {
	Avatar,
	Drawer,
	DrawerGroup,
	DrawerItem,
	Icon,
	Layout
} from "@ui-kitten/components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import VolApplication from "../components/applications_components/VolApplicationsOverview";
import * as RootNavigation from "../RootNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../components/profile_components/Profile";
import { IsVolunteerContext } from "../context/IsVolunteer";
import { View } from "react-native";
import { CategoryContext } from "../context/CategoryContext";
import { PageContext } from "../context/PageContext";
import { VolApplyNavigator } from "./VolApplyNavigator";

const drawer = createDrawerNavigator();

// Icons for drawer items

const OppsIcon = (props) => <Icon {...props} name='star-outline' />;
const CommunityIcon = (props) => <Icon {...props} name='people-outline' />;
const MentalHealthIcon = (props) => (
	<Icon {...props} name='headphones-outline' />
);
const EnvironmentIcon = (props) => <Icon {...props} name='globe-2-outline' />;
const AnimalIcon = (props) => <Icon {...props} name='heart-outline' />;
const ApplicationsIcon = (props) => (
	<Icon {...props} name='file-text-outline' />
);
const ProfileIcon = (props) => <Icon {...props} name='settings-2-outline' />;

// Drawer navigation for volunteer and organisation

const DrawerContent = () => {
	const { isVolunteer } = useContext(IsVolunteerContext);
	const { setCategory } = useContext(CategoryContext);
	const { page } = useContext(PageContext);

	// Navigate to page pressed on, set category state if it's a category page

	// Return a different drawer contents based on if a volunteer or organisation is logged in

	if (isVolunteer) {
		return (
			<Drawer>
				<SafeAreaView>
					<View style={{ flexDirection: "row", height: 50 }}></View>
					<Layout
						style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
					>
						<Avatar
							rounded
							containerStyle={{ borderColor: "#5A8A97", borderStyle: "solid" }}
							source={{
								uri: "https://image.flaticon.com/icons/png/512/847/847969.png"
							}}
						/>
					</Layout>
					<Layout style={{ flex: 1 }}>
						<DrawerGroup
							title='Opportunities'
							accessoryLeft={OppsIcon}
							onPress={() => {
								if (page !== "Opportunities")
									RootNavigation.navigate("Opportunities");
							}}
						>
							<DrawerItem
								title='Community Support'
								accessoryLeft={CommunityIcon}
								onPress={() => {
									if (page !== "community support")
										RootNavigation.navigate("Opportunities");
									setCategory("community support");
								}}
							/>
							<DrawerItem
								title='Mental Health'
								accessoryLeft={MentalHealthIcon}
								onPress={() => {
									if (page !== "mental health")
										RootNavigation.navigate("Opportunities");
									setCategory("mental health");
								}}
							/>
							<DrawerItem
								title='Environment'
								accessoryLeft={EnvironmentIcon}
								onPress={() => {
									if (page !== "environment")
										RootNavigation.navigate("Opportunities");
									setCategory("environment");
								}}
							/>
							<DrawerItem
								title='Animals'
								accessoryLeft={AnimalIcon}
								onPress={() => {
									if (page !== "animals")
										RootNavigation.navigate("Opportunities");
									setCategory("animals");
								}}
							/>
						</DrawerGroup>
						<DrawerItem
							title='Applications'
							accessoryLeft={ApplicationsIcon}
							onPress={() => {
								if (page !== "Applications")
									RootNavigation.navigate("Applications");
							}}
						/>
						<DrawerItem
							title='Profile'
							accessoryLeft={ProfileIcon}
							onPress={() => {
								if (page !== "Profile") RootNavigation.navigate("Profile");
							}}
						/>
					</Layout>
				</SafeAreaView>
			</Drawer>
		);
	} else {
		return (
			<Drawer>
				<SafeAreaView>
					<Layout
						style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
					>
						<Avatar
							rounded
							size={200}
							containerStyle={{ borderColor: "#5A8A97", borderStyle: "solid" }}
							source={{
								uri: "https://image.flaticon.com/icons/png/512/847/847969.png"
							}}
						/>
					</Layout>
					<Layout style={{ flex: 1 }}>
						<DrawerItem
							title='Opportunities'
							accessoryLeft={OppsIcon}
							onPress={() => {
								RootNavigation.navigate("Opportunities");
							}}
						/>
						<DrawerItem
							title='Profile'
							accessoryLeft={ProfileIcon}
							onPress={() => {
								RootNavigation.navigate("Profile");
							}}
						/>
					</Layout>
				</SafeAreaView>
			</Drawer>
		);
	}
};

// Drawer navigator component here, contains the different screens you can navigate to from the drawer

const DrawerNavigator = () => (
	<drawer.Navigator
		initialRouteName='Opportunities'
		drawerContent={(props) => <DrawerContent {...props} />}
	>
		<drawer.Screen name='Opportunities' component={VolApplyNavigator} />
		<drawer.Screen name='Applications' component={VolApplication} />
		<drawer.Screen name='Profile' component={Profile} />
	</drawer.Navigator>
);

export default DrawerNavigator;
