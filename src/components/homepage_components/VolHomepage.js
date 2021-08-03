import React from "react";
import {
	Layout,
	Text,
	IndexPath,
	Select,
	SelectItem,
	Input
} from "@ui-kitten/components";

import { StyleSheet } from "react-native";

// Homepage
const VolHomepage = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const data = ["Distance", "Date posted", "Date of event", "Categories"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");

	return (
		<>
			<Layout style={{ flex: 1 }}></Layout>

			<Layout style={(styles.container, { flex: 1 })}>
				<Text>Sort results</Text>
				<Select
					value={displayValue}
					selectedIndex={selectedIndex}
					onSelect={(index) => setSelectedIndex(index)}
				>
					<SelectItem title='Distance' />
					<SelectItem title='Date posted' />
					<SelectItem title='Date of event' />
					<SelectItem title='Categories' />
				</Select>
				<Text>Search</Text>
				<Input
					placeholder='Search'
					value={searchTerm}
					onChangeText={(nextValue) => setSearchTerm(nextValue)}
				/>

				<Text>List of opportunities</Text>
			</Layout>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 128,
		justifyContent: "center"
	}
});

export default VolHomepage;
