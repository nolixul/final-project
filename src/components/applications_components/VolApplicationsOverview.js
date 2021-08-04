import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Divider,
	Layout,
	Text,
	IndexPath,
	Select,
	SelectItem,
	Input
} from "@ui-kitten/components";

import { StyleSheet, View } from "react-native";
import CustomHeader from "../CustomHeader";

// Applications made
const VolApplication = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const data = ["Sort by", "New", "Date of event"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");
	const [status, setStatus] = React.useState("Pending");
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={false} />
				<Divider />
				<Layout style={{ flex: 1 }}>
					<View style={{ flexDirection: "row", height: 50 }}></View>

					<View style={styles.view}>
						<View style={{ flex: 1 }}>
							<Select
								value={displayValue}
								selectedIndex={selectedIndex}
								onSelect={(index) => setSelectedIndex(index)}
							>
								<SelectItem title='Sort by' />
								<SelectItem title='New' />
								<SelectItem title='Date of event' />
							</Select>
							<View style={{ flex: 1 }}>
								<Input
									placeholder='Search'
									value={searchTerm}
									onChangeText={(nextValue) => setSearchTerm(nextValue)}
								/>
							</View>
						</View>
					</View>

					<View style={{ flexDirection: "row", height: 50 }}></View>

					<View style={{ flex: 1 }}>
						<Text>Applications made</Text>
						<Input
							label='Status'
							value={status}
							onChangeText={(nextValue) => setStatus(nextValue)}
						/>
					</View>
				</Layout>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 128
	},
	view: {
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center"
	}
});

export default VolApplication;
