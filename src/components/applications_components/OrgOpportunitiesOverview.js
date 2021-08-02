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

// Applications received
const OrgApplication = ({ navigation }) => {
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
	const [selectedOption, setSelectedOption] = React.useState(new IndexPath(0));
	const statusData = ["Response required", "Accept", "Decline"];
	const displayStatusValue = statusData[selectedOption.row];

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<TopNavigation
					title="Organisation Opportunities"
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

					<Text>Applications received</Text>
					<Select
						value={displayStatusValue}
						selectedOption={selectedOption}
						onSelect={(index) => setSelectedOption(index)}
					>
						<SelectItem title="Response required" />
						<SelectItem title="Accept" />
						<SelectItem title="Decline" />
					</Select>
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

export default OrgApplication;