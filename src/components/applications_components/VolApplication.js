import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Divider,
	Icon,
	Layout,
	TopNavigation,
	TopNavigationAction,
	Text,
	IndexPath,
	Select,
	SelectItem,
	Input,
} from "@ui-kitten/components";
import { DrawerNavigation } from "../../navigation/drawernavigation";
import { StyleSheet } from "react-native";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// Applications made
const VolApplication = ({ navigation }) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	const BackAction = () => (
		<TopNavigationAction icon={BackIcon} onPress={navigateBack} />
	);
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const data = ["Distance", "Date posted", "Date of event", "Categories"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");
	const [status, setStatus] = React.useState("Pending");
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<TopNavigation
					title="Volunteer Applications"
					alignment="center"
					accessoryLeft={BackAction}
				/>
				<Divider />
				<Layout style={{ flex: 1 }}>
					<DrawerNavigation />
				</Layout>

				<Layout style={(styles.container, { flex: 1 })}>
					<Text>Sort results</Text>
					<Select
						value={displayValue}
						selectedIndex={selectedIndex}
						onSelect={(index) => setSelectedIndex(index)}
					>
						<SelectItem title="Distance" />
						<SelectItem title="Date posted" />
						<SelectItem title="Date of event" />
						<SelectItem title="Categories" />
					</Select>
					<Text>Search</Text>
					<Input
						placeholder="Search"
						value={searchTerm}
						onChangeText={(nextValue) => setSearchTerm(nextValue)}
					/>

					<Text>Applications made</Text>
					<Input
						label="Status"
						value={status}
						onChangeText={(nextValue) => setStatus(nextValue)}
					/>
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
});

export default VolApplication;
