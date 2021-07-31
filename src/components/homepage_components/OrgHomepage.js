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
	Button,
} from "@ui-kitten/components";
// import { DrawerNavigation } from "../../navigation/drawernavigation";
import { StyleSheet } from "react-native";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// Homepage
const OrgHomepage = ({ navigation }) => {
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

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<TopNavigation
					title="Organisation Homepage"
					alignment="center"
					accessoryLeft={BackAction}
				/>
				<Divider />
				{/* <Layout style={{ flex: 1 }}>
          <DrawerNavigation />
        </Layout> */}

				<Layout style={styles.container}>
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
					<Button style={styles.button}>Post new opportunity</Button>
				</Layout>
				<Layout style={{ flex: 1 }}>
					<Text>List of opportunities inc number of applications</Text>
					<Button style={styles.button}>Withdraw opportunity</Button>
					<Button style={styles.button}>Show volunteers</Button>
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

export default OrgHomepage;
